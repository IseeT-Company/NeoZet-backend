import {Router} from "express";
import promoController from "../controllers/promo.controller.js"

const promoRouter = Router()


promoRouter.get("/promotions", promoController.getPromotions)
promoRouter.get("/active_promo", promoController.getActivePromotions)
promoRouter.get("/promotion/:id", promoController.getPromotion)
promoRouter.post("/promotion", promoController.createPromotion)
promoRouter.delete("/promotion/:id", promoController.deletePromotion)


promoRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default promoRouter