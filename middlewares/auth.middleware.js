import jwt from "jsonwebtoken";


const cookieJwtAuth = (req, res, next) => {
    console.log(req.cookie)
    const token = req.cookies["token"];
    try {
        req.user = jwt.verify(token, process.env.TOKEN_KEY);
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.redirect("/login");
    }
};

export default cookieJwtAuth;