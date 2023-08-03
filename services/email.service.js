import {transporter} from "../models/email-client.js";
import {config} from "dotenv";

config()

class emailService{

    async sendWithAttachments(message){
        const info = await transporter.sendMail(
            {
                from: process.env.EMAIL_FROM_USER,
                to: process.env.EMAIL_FROM_USER,
                // to: "iseet@internet.ru",
                subject: "Testing braza",
                html: message
            }
        )
        console.log(info)
    }

}

export default new emailService()