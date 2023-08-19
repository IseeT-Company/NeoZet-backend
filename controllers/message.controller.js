import emailService from "../services/email.service.js"
import telegramService from "../services/telegram.service.js";
import archiver from "archiver";
import JSZip from "jszip";
import multer from "multer";
import path from "path";
import fs from "fs";

class messageController {
    async sendWithAttachments(req, res) {
        const {name, email, phone, message} = req.body
        const filedata = req.files
        // console.log(filedata);
        if (!filedata)
            res.send("Ошибка при загрузке файла");
        else
            res.send("Файл загружен");



        const __dirname = path.resolve()
        const arcName = `${name.replace(" ", "_")}_${Date.now()}`
        const arcPath = __dirname + `\\static\\uploads\\requests\\${arcName}.zip`
        const output = fs.createWriteStream(arcPath);
        const archive = archiver('zip', {
            zlib: {level: 9} // Sets the compression level.
        });

        output.on('close', function () {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
        });

        archive.on('error', function (err) {
            throw err;
        });

        archive.pipe(output);
        for (let i = 0; i < filedata.length; i++){
            // console.log(filedata[i])
            const tmpfile = __dirname + `\\${filedata[i].path}`;
            await archive.append(fs.createReadStream(tmpfile), {name: filedata[i].filename});
            // fs.rmSync(__dirname + `\\${filedata[i].path}`)
        }
        await archive.finalize();

        for (let i = 0; i < filedata.length; i++){
            fs.rmSync(__dirname + `\\${filedata[i].path}`)
        }


        const emailInfo = await emailService.sendWithAttachments(name, email, phone, message, arcPath, arcName+".zip")
        const tgInfo = await telegramService.SendMessage(name, email, phone, message, arcName, arcPath)
        // res.send(notes)
    }
}

export default new messageController()