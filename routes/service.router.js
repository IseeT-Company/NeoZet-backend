import {Router} from "express";
import serviceController from "../controllers/service.controller.js"
import multer from "multer";
import {nanoid} from "nanoid";
import cookieJwtAuth from "../middlewares/auth.middleware.js";

const serviceRouter = Router()


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, `static/uploads/service`);
    },
    filename: (req, file, cb) =>{
        const name = Buffer.from(file.originalname, 'latin1').toString('utf8')

        cb(null, `${nanoid(10)}_${name}`);
    }
});
const upload = multer({storage:storageConfig});

serviceRouter.post("/service", cookieJwtAuth,upload.single("image"), serviceController.createService)

serviceRouter.get("/services", serviceController.getServices)
serviceRouter.get("/service/:id", serviceController.getService)
serviceRouter.delete("/service/:id",cookieJwtAuth, serviceController.deleteService)

serviceRouter.put("/service/:id", cookieJwtAuth,upload.single("image"), serviceController.updateService)


serviceRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default serviceRouter