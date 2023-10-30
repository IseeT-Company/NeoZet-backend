import authService from "../services/auth.service.js"
import tgService from "../services/telegram.service.js";
import jwt from "jsonwebtoken";

class authController {
    async login(req, res) {
        const {username, password} = req.body;
        console.log(username, password)
    
        const user = await authService.getUser(username);
    
        if (user.password !== password || user.username !== username) {
            console.log(password + " " + username);
            return res.status(403).json({
                error: "invalid login",
            });
        }

        console.log(user)
        
        const token = jwt.sign(user, process.env.TOKEN_KEY, {expiresIn: "2h"});

        return res.status(200).send({token})
    }

    async checkToken (req, res) {
        console.log("Checking")
        let authHeader = req.headers.authorization
        let token = authHeader.split(" ")[1]
    
        try {
            let ver = jwt.verify(token, process.env.TOKEN_KEY)
            if (ver) {
                res.status(200).send()
            }   
        } catch (error) {
            console.log(error)
        }
    
        
    
        res.status(401).send()
    
    }

    async setTempPassword(req, res){
        const {username, password} = req.body
        
        let ch = await authService.setTempPassword(username, password)
        let ms = await tgService.SendPasswordMessage(`http://${req.headers.host}/changetemp/${ch}`)
        if (ch){
            res.status(200).send()
        }
        res.status(500).send()
    }

    async verifyActivationLink(req,res){
        let {link} = req.params
        let result = await authService.verifyActivationLink(link)
        if (result === true){
            res.status(200).send({"message" : "Пароль успешно изменен"})
        }else{
            res.status(400).send({"message": "Пароль не был изменен. Использованный код не действителен."})
        }
    }
}

export default new authController()