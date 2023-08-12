import promoService from "../services/promo.service.js"

class promoController {
    async getPromotions(req, res) {
        const notes = await promoService.getPromotions()
        res.send(notes)
    }


    async getPromotion(req, res) {
        const id = req.params.id
        const note = await promoService.getPromotion(id)
        res.send(note)
    }

    async getActivePromotions(req, res) {
        const notes = await promoService.getActivePromotions()
        res.send(notes)
    }

    async deletePromotion(req, res) {
        const id = req.params.id
        const note = await promoService.deletePromotion(id)
        res.send(note)
    }

    async createPromotion(req, res) {
        const {title, contents} = req.body
        const note = await promoService.createPromotion(title, contents)
        res.status(201).send(note)
    }
}

export default new promoController()