import jwt from "jsonwebtoken";


const cookieJwtAuth = (req, res, next) => {
    console.log("Checking")
    let authHeader = req.headers.authorization
    let token = authHeader.split(" ")[1]
    try {
        if (!jwt.verify(token, process.env.TOKEN_KEY)){
            return res.status(401).send()
        }
    } catch (error) {
        console.log(error)
    }
    
    next()
};

export default cookieJwtAuth;