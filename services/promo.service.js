import {pool} from "../models/db.js"

class promoService {

    async getPromotions() {
        const [rows] = await pool.query("SELECT * FROM promotion")
        return rows
    }


    async getPromotion(id) {

        const [rows] = await pool.query(`
            SELECT *
            FROM promotion
            WHERE id = ?
        `, [id])
        return rows[0]
    }

    async deletePromotion(id) {
        const [rows] = await pool.query(`
            DELETE
            FROM promotion
            WHERE id = ?
        `, [id])
        return this.getPromotions()
    }

    async createPromotion(title, contents) {
        const [result] = await pool.query(`
            INSERT INTO promotion (title, contents)
            VALUES (?, ?)
        `, [title, contents])
        const id = result.insertId
        return this.getPromotion(id)
    }
}

export default new promoService()