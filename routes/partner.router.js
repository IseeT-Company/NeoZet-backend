import {Router} from "express";
import partnerController from "../controllers/partner.controller.js"
import multer from "multer";
import {nanoid} from "nanoid";
import cookieJwtAuth from "../middlewares/auth.middleware.js";

const partnerRouter = Router()


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

partnerRouter.post("/partner",upload.single("image"), partnerController.createPartner)

partnerRouter.get("/partners", partnerController.getPartners)
partnerRouter.get("/partner/:id", partnerController.getPartner)
partnerRouter.delete("/partner/:id", cookieJwtAuth,partnerController.deletePartner)


partnerRouter.put("/partner/:id", cookieJwtAuth, upload.single("image"), partnerController.updatePartner)

partnerRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default partnerRouter