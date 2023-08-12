import {Router} from "express";
import serviceController from "../controllers/service.controller.js"

const serviceRouter = Router()


serviceRouter.get("/services", serviceController.getServices)
serviceRouter.get("/service/:id", serviceController.getService)
serviceRouter.post("/service", serviceController.createService)
serviceRouter.delete("/service/:id", serviceController.deleteService)


serviceRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default serviceRouter