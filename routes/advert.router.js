import {Router} from "express";
import advertController from "../controllers/advert.controller.js"
import multer from "multer";
import {nanoid} from "nanoid";
import cookieJwtAuth from "../middlewares/auth.middleware.js";

const advertRouter = Router()


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, `static/uploads/category`);
    },
    filename: (req, file, cb) =>{
        const name = Buffer.from(file.originalname, 'latin1').toString('utf8')

        cb(null, `${nanoid(10)}_${name}`);
    }
});
const upload = multer({storage:storageConfig});

advertRouter.post("/advert",upload.single("image"), advertController.createAdvert)

advertRouter.get("/adverts", advertController.getAdverts)
advertRouter.get("/advert/:id", advertController.getAdvert)
advertRouter.delete("/advert/:id", cookieJwtAuth,advertController.deleteAdvert)


advertRouter.post("/advert/:id", cookieJwtAuth, upload.single("image"), advertController.updateAdvert)

advertRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default advertRouter