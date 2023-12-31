import partnerService from "../services/partner.service.js"
import {partnerModel} from "../models/partner.model.js";
import Tools from "../services/tools.js"

class partnerController {
    async getPartners(req, res) {
        const notes = await partnerService.getPartners()
        res.send(notes)
    }


    async getPartner(req, res) {
        const id = req.params.id
        const note = await partnerService.getPartner(id)
        res.send(note)
    }

    async deletePartner(req, res) {
        const id = req.params.id
        const note = await partnerService.deletePartner(id)
        res.send(note)
    }

    async createPartner(req, res) {
        
        const {name} = req.body
        let image = null
        if (req.file){
            let path = Tools.changePath(req.file.path)
            const index = path.search("\/")
            image = "/" + path.slice(index+1)
        }
        const partner = new partnerModel(name, image)
        const note = await partnerService.createPartner(partner)
        res.status(201).send(note)
    }


    async updatePartner(req, res) {
        const id = req.params.id
        const {name} = req.body
        let image = null
        if (req.file){
            let path = Tools.changePath(req.file.path)
            const index = path.search("\/")
            image = "/" + path.slice(index+1)
        }
        const partner = new partnerModel(name, image)
        const note = await partnerService.updatePartner(id, partner)
        res.send(note)
    }
}

export default new partnerController()