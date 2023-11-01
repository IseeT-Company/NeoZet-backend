import {check, body} from "express-validator"

let tempPasswordValidation = [
    // check("username", "Имя пользоватея должно быть ").isLength({min: 5})
    body("username")
    .exists({ checkFalsy: true })
    .withMessage("Ввод имени пользователя обязателен")
    .isLength({min: 5})
    .withMessage("Имя пользователя должно включать в себя больше 5 символов"),
    body("password")
    .exists({checkNull: true})
    .withMessage("Ввод пароля обязателен")
    .isLength({min: 6})
    .withMessage("Длина пароля должна быть больше 6")
]

export let formRequestValidation = [
    // name, email, phone, message
    body("name")
    .exists({ checkNull: true })
    .withMessage("Ввод имени обязателен"),
    body("email")
    .exists({ checkNull: true })
    .withMessage("Ввод EMail обязателен"),
    body("phone")
    .exists({ checkNull: true })
    .withMessage("Ввод номера телефона обязателен"),
    body("message")
    .exists({ checkNull: true })
    .withMessage("Ввод сообщения обязателен")
    .isLength({min: 50})
    .withMessage("Минимальная длина обращения - 50 символов")
]

export default tempPasswordValidation