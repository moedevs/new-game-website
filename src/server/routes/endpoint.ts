import * as express from 'express'
import * as multer from 'multer'
import * as _ from './test'
import {testEndpoint} from "./test";
import {uploadEndpoint} from "./uploader";

export const UPLOAD_FOLDER = process.env['UPLOAD_FOLDER'] || './uploads';

import * as Hashids from 'hashids'
import {logger} from "../logger/winston";

const hash = new Hashids('Hifumi');
/**
 * Unfortunately multer doesn't let us specify the upload path so we have
 * to create a new instance of diskStorage every time we want to save
 * something to a different directory
 */
export const storage = (dest: string = UPLOAD_FOLDER) =>  multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, dest);
    },
    filename: (req, file, callback) => {
        const copy = file.originalname;
        const parts = copy.split('.');
        const extension = parts.pop();
        const filename = `${hash.encode(Date.now())}.${extension}`;
        callback(null, filename);
    }
});

export const endpoint = express.Router();

testEndpoint(endpoint);
uploadEndpoint(endpoint);

