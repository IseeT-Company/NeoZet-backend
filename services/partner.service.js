import {pool} from "../models/db.js"

class partnerService {

    async getPartners() {
        const [rows] = await pool.query("SELECT * FROM partner")
        return rows
    }

    async getPartner(id) {
        const [rows] = await pool.query("SELECT * FROM partner WHERE id =?", [id])
        return rows[0]
    }

    async createPartner(partner) {
        const [rows] = await pool.query(`INSERT INTO partner SET ?`, partner)
        return rows
    }

    async updatePartner(id, partner) {
        const [rows] = await pool.query("UPDATE partner SET? WHERE id =?", [partner, id])
        return rows
    }

    async deletePartner(id) {
        const [rows] = await pool.query("DELETE FROM partner WHERE id =?", [id])
        return rows
    }
}

export default new partnerService()