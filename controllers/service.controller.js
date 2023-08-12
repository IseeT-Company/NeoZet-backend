import serviceService from "../services/Service.service.js"

import service from "../models/service.model.js"

class serviceController {
    async getServices(req, res) {
        const notes = await serviceService.getServices()
        res.send(notes)
    }


    async getService(req, res) {
        const id = req.params.id
        const note = await serviceService.getService(id)
        res.send(note)
    }

    async deleteService(req, res) {
        const id = req.params.id
        const note = await serviceService.deleteService(id)
        res.send(note)
    }

    async createService(req, res) {
        const note = serviceService.createService(req.body)
        res.status(201).send(note)
    }

}

export default new serviceController()