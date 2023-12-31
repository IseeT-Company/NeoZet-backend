import express, {Router} from "express";
import messageController from "../controllers/message.controller.js"
import multer from "multer";
import fs from "fs"
import {nanoid} from "nanoid";
import {formRequestValidation} from "../validators/request.validator.js"
const emailRouter = Router()

emailRouter.use(express.urlencoded({ extended: false }));
emailRouter.use(express.json());
// emailRouter.use(captchaChecker);


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        // fs.mkdir(`uploads/${n}`)
        cb(null, `static\\uploads\\requests`);
    },
    filename: (req, file, cb) =>{
        const name = Buffer.from(file.originalname, 'latin1').toString('utf8')

        cb(null, `${nanoid(5)}_${name.replace(" ", "_")}`);
    }
});

const upload = multer({storage:storageConfig});
emailRouter.post("/message", upload.array("filedata", 10), formRequestValidation, messageController.sendWithAttachments)

export default emailRouter