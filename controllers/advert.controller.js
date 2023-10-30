import advertService from "../services/advert.service.js"
import {advertModel} from "../models/advert.model.js";
import Tools from "../services/tools.js"
class advertController {
    async getAdverts(req, res) {
        const notes = await advertService.getAdverts()
        res.send(notes)
    }


    async getAdvert(req, res) {
        const id = req.params.id
        const note = await advertService.getAdvert(id)
        res.send(note)
    }

    async deleteAdvert(req, res) {
        const id = req.params.id
        const note = await advertService.deleteAdvert(id)
        res.send(note)
    }

    async createAdvert(req, res) {
        
        const {title} = req.body
        let image = null
        if (req.file){
            let path = Tools.changePath(req.file.path)
            const index = path.search("\/")
            image = "/" + path.slice(index+1)
        }
        const advert = new advertModel(title, image)
        const note = await advertService.createAdvert(advert)
        res.status(201).send(note)
    }


    async updateAdvert(req, res) {
        const id = req.params.id
        const {title} = req.body
        let image = null
        if (req.file){
            let path = Tools.changePath(req.file.path)
            const index = path.search("\/")
            image = "/" + path.slice(index+1)
        }
        const advert = new advertModel(title, image)
        const note = await advertService.updateAdvert(id, advert)
        res.send(note)
    }
}

export default new advertController()