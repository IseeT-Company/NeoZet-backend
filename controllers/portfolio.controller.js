import portfolioService from "../services/portfolio.service.js"

import portfolio from "../models/portfolio.model.js"
import {partnerModel} from "../models/partner.model.js";
import portfolioModel from "../models/portfolio.model.js";
import Tools from "../services/tools.js"

class portfolioController {
    async getPortfolios(req, res) {
        const notes = await portfolioService.getPortfolios()
        res.send(notes)
    }


    async getPortfolio(req, res) {
        const id = req.params.id
        const note = await portfolioService.getPortfolio(id)
        res.send(note)
    }

    async deletePortfolio(req, res) {
        const id = req.params.id
        const note = await portfolioService.deletePortfolio(id)
        res.send(note)
    }

    async createPortfolio(req, res) {
        console.log(req.body)
        const {name, category_id} = req.body
        console.log(name, category_id)
        let image = null
        if (req.file){
            let path = Tools.changePath(req.file.path)
            const index = path.search("\/")
            image = "/" + path.slice(index+1)
        }
        const portfolio = new portfolioModel(name, image, category_id)
        const note = portfolioService.createPortfolio(portfolio)
        res.status(201).send(note)
    }

    async updatePortfolio(req, res) {
        const id = req.params.id
        const {name, category_id} = req.body
        console.log(name, category_id)
        let image = null
        if (req.file){
            let path = Tools.changePath(req.file.path)
            const index = path.search("\/")
            image = "/" + path.slice(index+1)
        }
        const portfolio = new portfolioModel(name, image, category_id)
        const note = await portfolioService.updatePortfolio(id, portfolio)
        res.send(note)
    }

}

export default new portfolioController()