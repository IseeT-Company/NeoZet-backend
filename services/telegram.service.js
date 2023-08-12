import axios from 'axios'
import {config} from "dotenv";
import {format} from "date-fns"
import {expand} from "dotenv-expand";
import * as fs from "fs";
import FormData from "form-data"

expand(config())

class tgService {

    async SendMessage(name, email, phone, message, arcName, arcPath) {
        const formData = new FormData();
        try {

            // const buffer3 = Buffer.from('buff it!');
            // archive.append(buffer3, {name: 'file3.txt'});

            console.log(arcPath, arcName)
            formData.append('chat_id', process.env.CHAT_ID);
            formData.append('caption', `Новая заявка: ${format(new Date(), 'MM.dd.yyyy')} \r\nИмя: ${name} \r\nПочта: ${email} \r\nНомер телефона: ${phone}  \r\nЗаявка: ${message}`);
            // formData.append('document', await fs.createReadStream(`./static/test.txt`), `${arcName}.zip`);
            formData.append('file', fs.createReadStream(`./uploads/${arcName}.zip`), `${arcName}.zip`);

            await axios.post(process.env.TELEGRAM_URI, formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }.then(response => {
                console.log(response.data);
            })
                .catch(error => {
                    console.error(error);
                }))
            return 'Done'
        } catch (e) {
            console.log(e)
            return e
        }
    }
}

export default new tgService()