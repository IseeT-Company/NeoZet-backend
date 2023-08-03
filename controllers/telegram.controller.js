import axios from 'axios'
import {config} from "dotenv";
import {format} from "date-fns"
// import ruLocale from "date-fns/locale/ru";
// import { ru } from 'date-fns/locale';

config()
const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`


class tgController{
    async SendMessage(req, res){
        const { name, email, phone, message } = req.body

        // if (message.trim() === "") {
        //     return res.sendStatus(400)
        // }

        // const messageText = message?.text?.toLowerCase()?.trim()
        // console.log(req.body)
        try {
            await axios.post(TELEGRAM_URI, {
                chat_id: process.env.CHAT_ID,
                text: `Новая заявка: ${format(new Date(),'MM.dd.yyyy', {locale: ru})} \r\nИмя: ${name} \r\nПочта: ${email} \r\nНомер телефона: ${phone}  \r\nЗаявка: ${message}`
            })
            res.send('Done')
        } catch (e) {
            console.log(e)
            res.send(e)
        }
    }
}

export default new tgController()