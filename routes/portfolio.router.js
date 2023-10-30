import {Router} from "express";
import portfolioController from "../controllers/portfolio.controller.js"
import multer from "multer";
import {nanoid} from "nanoid";
import partnerController from "../controllers/partner.controller.js";
import partnerRouter from "./partner.router.js";
import cookieJwtAuth from "../middlewares/auth.middleware.js";

const portfolioRouter = Router()


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, `static/uploads/portfolio`);
    },
    filename: (req, file, cb) =>{
        const name = Buffer.from(file.originalname, 'latin1').toString('utf8')

        cb(null, `${nanoid(10)}_${name}`);
    }
});
const upload = multer({storage:storageConfig});
portfolioRouter.post("/portfolio",cookieJwtAuth,upload.single("src"), portfolioController.createPortfolio)

portfolioRouter.get("/portfolios", portfolioController.getPortfolios)
portfolioRouter.get("/portfolio/:id", portfolioController.getPortfolio)
portfolioRouter.delete("/portfolio/:id",cookieJwtAuth, portfolioController.deletePortfolio)

portfolioRouter.post("/portfolio/:id",cookieJwtAuth, upload.single("src"), portfolioController.updatePortfolio)


portfolioRouter.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke 💩')
})

export default portfolioRouter