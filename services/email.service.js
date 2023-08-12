import {transporter} from "../models/email-client.js";
import {config} from "dotenv";

config()

class emailService {

    async sendWithAttachments(name, email, phone, message, arcPath, arcName) {
        const htmlMessage =
            `<table align="center" border="0" cellpadding="0" cellspacing="20" height="100%" width="100%">
                <tr>
                    <td align="center" valign="top">
                        <table width="600" bgcolor="#f8f6fe" cellpadding="7" style="font-size:16px; padding:30px; line-height: 28px;">
                            <tr>
                            <td style="text-align:right; padding-right: 20px;" width="100" valign="top"><strong>Имя:</strong></td>
                                <td>${name}</td>
                            </tr>
                            <tr>
                                <td style="text-align:right; padding-right: 20px;" width="100" valign="top"><strong>Почта:</strong></td>
                                <td>${email}</td>
                            </tr>
                            <tr>
                                <td style="text-align:right; padding-right: 20px;" width="100" valign="top"><strong>Номер телефона:</strong></td>
                                <td>${phone}</td>
                            </tr>
                            <tr>
                                <td style="text-align:right; padding-right: 20px;" width="100" valign="top"><strong>Сообщение:</strong></td>
                                <td>${message}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`

        const info = await transporter.sendMail(
        {
                from: process.env.EMAIL_FROM_USER,
                to: process.env.EMAIL_FROM_USER,
                // to: "iseet@internet.ru",
                subject: "Testing braza",
                html: htmlMessage,
                attachments: [
                    {   // filename and content type is derived from path
                        filename: arcName,
                        path: arcPath
                    },
                ]
            }
        )
        console.log(info)
    }

}

export default new emailService()