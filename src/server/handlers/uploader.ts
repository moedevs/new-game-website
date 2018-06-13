import {logger} from "../logger/winston";
import * as fs from "fs";
import * as path from "path";
import * as multer from "multer";
import {UPLOAD_FOLDER, storage} from "../routes/endpoint";
import {RequestHandler} from "express";


export const createUploader = (folder?: string): Promise<[RequestHandler, string]> => {
    return new Promise((resolve, reject) => {
        if (!folder) {
            resolve([multer({storage: storage()}).single('media'), '']);
        }
        const target = path.join(UPLOAD_FOLDER, folder);
        fs.exists(target, exists => {
            if (!exists) {
                fs.mkdir(target, err => {
                    if (err){
                        return reject(err);
                    }
                    return resolve([multer({storage: storage(target)}).single('media'), target]);
                });
            }
            return resolve([multer({storage: storage(target)}).single('media'), target]);
        });
    });
};

export function saveMedia(req, res, folder){
    return new Promise((resolve, reject) => {
        createUploader(folder).then(out => {
            const [uploader, target] = out;
            uploader(req, res, (err) => {
                if (err){
                    logger.error(err);
                    reject(err);
                }
                logger.info('Uploaded a file');
                logger.info(req.file.filename);
                resolve(req.file.filename);

            })
        })
    });
}
