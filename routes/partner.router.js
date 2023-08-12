import {Router} from "express";
import partnerController from "../controllers/partner.controller.js"

const partnerRouter = Router()


partnerRouter.get("/partners", partnerController.getPartners)
partnerRouter.get("/partner/:id", partnerController.getPartner)
partnerRouter.post("/partner", partnerController.createPartner)
partnerRouter.delete("/partner/:id", partnerController.deletePartner)


partnerRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default partnerRouter