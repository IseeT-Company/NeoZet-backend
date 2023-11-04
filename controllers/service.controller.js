import serviceService from "../services/service.service.js"

import serviceModel from "../models/service.model.js";
import Tools from "../services/tools.js"
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
        const {title, description} = req.body
        console.log(title, description)
        let image = null
        if (req.file){
            let path = Tools.changePath(req.file.path)
            const index = path.search("\/")
            image = "/" + path.slice(index+1)
        }
        const service = new serviceModel(title, image, description)
        const note = serviceService.createService(service)
        res.status(201).send(note)
    }

    async updateService(req, res) {
        const id = req.params.id
        const {title, description} = req.body
        console.log(title, description)
        let image = null
        if (req.file){
            let path = Tools.changePath(req.file.path)
            const index = path.search("\/")
            image = "/" + path.slice(index+1)
        }
        const service = new serviceModel(title, image, description)
        console.log(service)
        const note = serviceService.updateService(id, service)
        res.send(note)
    }

}

export default new serviceController()