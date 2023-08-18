import promoService from "../services/promo.service.js"
import {protomotionModel} from "../models/promotion.model.js";

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
        const {title, description} = req.body
        const index = req.file.path.search("\\\\")
        const image = "/" + req.file.path.slice(index+1)
        const promotion = new protomotionModel(title, image, description)
        const note = await promoService.createPromotion(promotion)
        res.status(201).send(note)
    }
    async updatePromotionStatus(req, res) {
        const {id} = req.params
        const {title, contents} = req.body
        const note = await promoService.updatePromotionStatus(id)
        res.send(note)
    }

    async updatePromotion(req, res) {
        const {id} = req.params
        const {title, description} = req.body
        const note = await promoService.updatePromotion(id, title, description)
        res.send(note)
    }
}

export default new promoController()