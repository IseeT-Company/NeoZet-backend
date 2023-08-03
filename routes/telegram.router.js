import {Router} from "express";
import tgController from "../controllers/telegram.controller.js"

const tgRouter = Router()


tgRouter.post("/message", tgController.SendMessage)

export default tgRouter