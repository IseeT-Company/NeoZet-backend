import emailService from "../services/email.service.js"

class emailController {
    async sendWithAttachments(req, res) {
        const {message} = req.body
        const notes = await emailService.sendWithAttachments(message)
        res.send(notes)
    }
}
export default new emailController()