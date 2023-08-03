import {Router} from "express";
import emailController from "../controllers/email.controller.js"

const emailRouter = Router()


emailRouter.post("/send", emailController.sendWithAttachments)

export default emailRouter