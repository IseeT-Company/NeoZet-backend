import {Router} from "express";
import promoController from "../controllers/promo.controller.js"
import multer from "multer";
import {nanoid} from "nanoid";
import cookieJwtAuth from "../middlewares/auth.middleware.js";

const promoRouter = Router()

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, `static/uploads/promotion`);
    },
    filename: (req, file, cb) =>{
        const name = Buffer.from(file.originalname, 'latin1').toString('utf8')

        cb(null, `${nanoid(10)}_${name}`);
    }
});
const upload = multer({storage:storageConfig});
promoRouter.post("/promotion", cookieJwtAuth, upload.single("image"), promoController.createPromotion)

promoRouter.get("/promotions", promoController.getPromotions)
promoRouter.get("/active_promo", promoController.getActivePromotions)
promoRouter.get("/promotion/:id", promoController.getPromotion)

promoRouter.delete("/promotion/:id",cookieJwtAuth, promoController.deletePromotion)
promoRouter.put("/active_promo/:id", cookieJwtAuth,promoController.updatePromotionStatus)
promoRouter.put("/promotion/:id", cookieJwtAuth,promoController.updatePromotion)

promoRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default promoRouter