import {Router} from "express";
import categoryController from "../controllers/category.controller.js"

const categoryRouter = Router()


categoryRouter.get("/categories", categoryController.getCategories)
categoryRouter.get("/category/:id", categoryController.getCategory)
categoryRouter.post("/category", categoryController.createCategory)
categoryRouter.delete("/category/:id", categoryController.deleteCategory)


categoryRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default categoryRouter