import {pool} from "../models/db.js"

class promoService {

    async getPromotions() {
        const [rows] = await pool.query("SELECT * FROM promotion")
        return rows
    }

    async getActivePromotions() {
        const [rows] = await pool.query("SELECT * FROM promotion WHERE status = 1")
        return rows
    }

    async getPromotion(id) {
        const [rows] = await pool.query("SELECT * FROM promotion WHERE id =?", [id])
        return rows[0]
    }

    async createPromotion(promotion) {
        const [rows] = await pool.query("INSERT INTO promotion SET?", promotion)
        return rows
    }

    async updatePromotion(id, promotion) {
        const [rows] = await pool.query("UPDATE promotion SET? WHERE id =?", [promotion, id])
        return rows
    }

    async deletePromotion(id) {
        const [rows] = await pool.query("DELETE FROM promotion WHERE id =?", [id])
        return rows
    }
}

export default new promoService()