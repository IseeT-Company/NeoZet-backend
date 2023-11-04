import express from 'express'
import path from 'path'
import promoRouter from "./routes/promo.router.js"
import authRouter from "./routes/auth.router.js"
import portfolioRouter from "./routes/portfolio.router.js"
import categoryRouter from "./routes/category.router.js"
import partnerRouter from "./routes/partner.router.js"
import serviceRouter from "./routes/service.router.js"
import advertRouter from "./routes/advert.router.js"
import messageRouter from "./routes/message.router.js"

import cors from "cors";
import cookieJwtAuth from "./middlewares/auth.middleware.js";

import cookieParser from "cookie-parser";



const app = express()

const __dirname = path.resolve()



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors()) // Use this after the variable declaration
app.use(cookieParser());

app.use("/api", messageRouter)
app.use("/api", promoRouter)
app.use("/api", portfolioRouter)
app.use("/api", serviceRouter)
app.use("/api", partnerRouter)
app.use("/api", categoryRouter)
app.use("/api", advertRouter)

app.use("/", authRouter)

app.use(express.static(path.resolve(__dirname, 'static')))


// console.log(app.get('static'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}...`)
})