import axios from 'axios'
import {config} from "dotenv";
import {format} from "date-fns"
import {expand} from "dotenv-expand";
import * as fs from "fs";
import FormData from "form-data"

// import ruLocale from "date-fns/locale/ru";
// import { ru } from 'date-fns/locale';

expand(config())

class tgController{





    async SendMessage(req, res){
        const formData = new FormData();
        const { name, email, phone, message } = req.body
        try {
            formData.append('chat_id', process.env.CHAT_ID);
            formData.append('caption', `Новая заявка: ${format(new Date(),'MM.dd.yyyy')} \r\nИмя: ${name} \r\nПочта: ${email} \r\nНомер телефона: ${phone}  \r\nЗаявка: ${message}`);
            formData.append('document', await fs.createReadStream('./static/test.txt'), 'myfilename.txt');
            formData.append('document', await fs.createReadStream('./static/test.txt'), 'myfilenam1e1.txt');

            await axios.post(process.env.TELEGRAM_URI, formData)
            res.send('Done')
        } catch (e) {
            console.log(e)
            res.send(e)
        }
    }
}

export default new tgController()