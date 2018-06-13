import * as fs from "fs";
import {endpoint, UPLOAD_FOLDER} from "./endpoint";
import * as path from "path";
import {logger} from "../logger/winston";
import {secret} from "../index";
import {saveMedia} from "../handlers/uploader";
import {Router} from "express-serve-static-core";

export const uploadEndpoint = (router: Router) => {
    router.post('/upload', (req, res, next) => {
        if (secret === undefined) {
            logger.error(
                'A request to upload a picture was refused ' +
                'because the UPLOAD_SECRET env variable is not set.'
            );

            return next('Upload service unavailable.');
        }

        else if (req.header('UPLOAD_KEY') !== secret) {
            logger.error('Received an upload request with an invalid key');
            return res.end('Invalid upload key');
        }

        const user = req.header('USER');
        if (user && !fs.existsSync(path.join(UPLOAD_FOLDER, user))) {
            try {
                fs.mkdirSync(path.join(UPLOAD_FOLDER, user));
            }
            catch (err) {
                // debug
                return next(err);
            }
        }
        saveMedia(req, res, user).then((filename) => {
            let ext;
            if (user){
                ext = `${user}/${filename}`;
            }
            else {
                ext = filename;
            }
            return res.redirect(`https://cdn.hifumi.io/${ext}`)
        }).catch(err => {
            logger.error(err);
            return next('Something went wrong')
        })
    });


}
