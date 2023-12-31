import {Router} from "express";
import {config} from "dotenv";
import authController from "../controllers/auth.controller.js"
import tempPasswordValidation from "../validators/request.validator.js"
const authRouter = Router()

config()

authRouter.post("/login", authController.login)

authRouter.get("/checktoken", authController.checkToken)
authRouter.post("/changetemp", tempPasswordValidation, authController.setTempPassword)
authRouter.get("/changetemp/:link", authController.verifyActivationLink)


export default authRouter