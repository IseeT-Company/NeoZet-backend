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

    async updatePromotionStatus(id) {
        const [row] = await pool.query("SELECT status FROM promotion WHERE id =?", [id])
        const status = row[0].status ? 0 : 1
        const [rows] = await pool.query("UPDATE promotion SET status = ? WHERE id =?", [status, id])
        return rows[0]
    }

    async deletePromotion(id) {
        const [rows] = await pool.query("DELETE FROM promotion WHERE id =?", [id])
        return rows
    }

    async updatePromotion(id, promotion) {
        let rows = null
        if (promotion.image != null){
            [rows] = await pool.query("UPDATE promotion SET? WHERE id =?", [promotion, id])
        }
        else{
            [rows] = await pool.query("UPDATE promotion SET title = ?, description = ? WHERE id =?", [promotion.title, promotion.description, id])
        }
        return rows
    }
}

export default new promoService()