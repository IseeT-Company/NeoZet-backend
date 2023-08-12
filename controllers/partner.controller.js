import partnerService from "../services/partner.service.js"

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
        const {title, contents} = req.body
        const note = await partnerService.createPartner(title, contents)
        res.status(201).send(note)
    }
}

export default new partnerController()