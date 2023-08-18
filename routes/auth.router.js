import {Router} from "express";
import {config} from "dotenv";

const authRouter = Router()

config()
import jwt from "jsonwebtoken";

const getUser = async (username) => {
    return {password: process.env.ADMIN_PASSWORD, username: process.env.ADMIN_LOGIN};
};

authRouter.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await getUser(username);

    if (user.password !== password || user.username !== username) {
        console.log(password + " " + username);
        return res.status(403).json({
            error: "invalid login",
        });
    }

    delete user.password;

    const token = jwt.sign(user, process.env.TOKEN_KEY, {expiresIn: "2h"});

    res.cookie("token", token);

    return res.redirect("/admin");
});

authRouter.get('/logout', async function (req, res, next) {
    res.clearCookie('token');
    res.redirect('/');
});


export default authRouter