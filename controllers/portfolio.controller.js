import portfolioService from "../services/portfolio.service.js"

import portfolio from "../models/portfolio.model.js"
import {partnerModel} from "../models/partner.model.js";
import portfolioModel from "../models/portfolio.model.js";

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
        const {name, category} = req.body
        const index = req.file.path.search("\\\\")
        const image = "/" + req.file.path.slice(index+1)
        const portfolio = new portfolioModel(name, image, category)
        const note = portfolioService.createPortfolio(portfolio)
        res.status(201).send(note)
    }

    async updatePortfolio(req, res) {
        const id = req.params.id
        const {name, category} = req.body
        const index = req.file.path.search("\\\\")
        const image = "/" + req.file.path.slice(index+1)
        const portfolio = new portfolioModel(name, image, category)
        const note = await portfolioService.updatePortfolio(id, portfolio)
        res.send(note)
    }

}

export default new portfolioController()