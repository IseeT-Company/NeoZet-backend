import portfolioService from "../services/portfolio.service.js"

import portfolio from "../models/portfolio.model.js"

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
        const note = portfolioService.createPortfolio(req.body)
        res.status(201).send(note)
    }

}

export default new portfolioController()