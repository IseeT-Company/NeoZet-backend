import {Router} from "express";
import categoryController from "../controllers/category.controller.js"
import multer from "multer";
import {nanoid} from "nanoid";
import cookieJwtAuth from "../middlewares/auth.middleware.js";

const categoryRouter = Router()




categoryRouter.post("/category", cookieJwtAuth, categoryController.createCategory)
categoryRouter.get("/categories", categoryController.getCategories)
categoryRouter.get("/category/:id", categoryController.getCategory)
categoryRouter.delete("/category/:id", cookieJwtAuth,categoryController.deleteCategory)
categoryRouter.post("/category/:id", cookieJwtAuth, categoryController.updateCategory)


categoryRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default categoryRouter