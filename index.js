import express from 'express'
import path from 'path'
import tgRouter from "./routes/telegram.router.js"
import promoRouter from "./routes/promo.router.js"
import emailRouter from "./routes/email.router.js"



const app = express()

const __dirname = path.resolve()



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/tg", tgRouter)
app.use("/email", emailRouter)
app.use("/admin", promoRouter)


app.use(express.static(path.resolve(__dirname, 'static')))

app.get("/check", function (req, res){
    res.sendFile(path.resolve(__dirname, 'static', 'check.html'))
})

console.log(app.get('static'))

app.listen(3000, () =>{
    console.log("Server is running on port 3000...")
})