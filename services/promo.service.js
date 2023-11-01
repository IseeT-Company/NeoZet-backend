import { pool } from "../models/db.js"

class promoService {

    async getPromotions() {
        try {
            const [rows] = await pool.query("SELECT * FROM promotion")
            return rows
        } catch (error) {
            return error
        }

    }

    async getActivePromotions() {
        try {
            const [rows] = await pool.query("SELECT * FROM promotion WHERE status = 1")
            return rows
        } catch (error) {
            return error
        }

    }

    async getPromotion(id) {
        try {
            const [rows] = await pool.query("SELECT * FROM promotion WHERE id =?", [id])
            return rows[0]
        } catch (error) {
            return error
        }

    }

    async createPromotion(promotion) {
        try {
            const [rows] = await pool.query("INSERT INTO promotion SET?", promotion)
            return rows
        } catch (error) {
            return error
        }

    }

    async updatePromotionStatus(id) {
        try {
            const [row] = await pool.query("SELECT status FROM promotion WHERE id =?", [id])
            const status = row[0].status ? 0 : 1
            const [rows] = await pool.query("UPDATE promotion SET status = ? WHERE id =?", [status, id])
            return rows[0]
        } catch (error) {
            return error
        }

    }

    async deletePromotion(id) {
        try {
            const [rows] = await pool.query("DELETE FROM promotion WHERE id =?", [id])
            return rows
        } catch (error) {
            return error
        }

    }

    async updatePromotion(id, promotion) {
        try {
            let rows = null
            if (promotion.image != null) {
                [rows] = await pool.query("UPDATE promotion SET? WHERE id =?", [promotion, id])
            }
            else {
                [rows] = await pool.query("UPDATE promotion SET title = ?, description = ? WHERE id =?", [promotion.title, promotion.description, id])
            }
            return rows
        } catch (error) {
            return error
        }

    }
}

export default new promoService()