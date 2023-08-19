import axios from 'axios'
import {config} from "dotenv";
import {format} from "date-fns"
import {expand} from "dotenv-expand";
import * as fs from "fs";
import FormData from "form-data"
import TelegramBot from "node-telegram-bot-api";
expand(config())

class tgService {
    bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN, { polling: true });

    async SendMessage(name, email, phone, message, arcName, arcPath) {
        const formData = new FormData();
        try {
            const res = await this.bot.sendDocument(process.env.CHAT_ID, arcPath, {caption: `Новая заявка: ${format(new Date(), 'MM.dd.yyyy')} \r\nИмя: ${name} \r\nПочта: ${email} \r\nНомер телефона: ${phone}  \r\nЗаявка: ${message}`});
            console.log(res)
        } catch (e) {
            console.log(e)
            return e
        }
    }
}

export default new tgService()