import {Router} from "express";
import portfolioController from "../controllers/portfolio.controller.js"

const portfolioRouter = Router()


portfolioRouter.get("/portfolios", portfolioController.getPortfolios)
portfolioRouter.get("/portfolio/:id", portfolioController.getPortfolio)
portfolioRouter.post("/portfolio", portfolioController.createPortfolio)
portfolioRouter.delete("/portfolio/:id", portfolioController.deletePortfolio)


portfolioRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default portfolioRouter