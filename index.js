import express from 'express'
import path from 'path'
import tgRouter from "./routes/telegram.router.js"
import promoRouter from "./routes/promo.router.js"
import authRouter from "./routes/auth.router.js"
import portfolioRouter from "./routes/portfolio.router.js"
import categoryRouter from "./routes/category.router.js"
import partnerRouter from "./routes/partner.router.js"
import serviceRouter from "./routes/service.router.js"
import messageRouter from "./routes/message.router.js"
import session from "express-session";

import sessionChecker from "./middlewares/auth.middleware.js"
import cors from "cors";



const app = express()

const __dirname = path.resolve()



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors()) // Use this after the variable declaration


app.use("/tg", tgRouter)
app.use("/api", messageRouter)
app.use("/admin", promoRouter)
app.use("/admin", portfolioRouter)
app.use("/admin", serviceRouter)
app.use("/admin", partnerRouter)
app.use("/admin", categoryRouter)

app.use("/", authRouter)

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    name: `login`,
    secret: 'nezoet',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // This will only work if you have https enabled!
        maxAge: 60000 // 1 min
    }
}));


app.use(express.static(path.resolve(__dirname, 'static')))

app.get("/check", function (req, res){
    res.sendFile(path.resolve(__dirname, 'static', 'check.html'))
})

app.get("/admin*", sessionChecker,function (req, res){
    res.redirect('/check')
})


app.get("/login", function (req, res){
    res.sendFile(path.resolve(__dirname, 'static', 'login.html'))
})


// console.log(app.get('static'))

app.listen(3000, () =>{
    console.log("Server is running on port 3000...")
})