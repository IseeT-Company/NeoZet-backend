import { pool } from "../models/db.js"

class advertService {

    async getAdverts() {
        try {
            const [rows] = await pool.query("SELECT * FROM advert")
            return rows
        }
        catch (error) {
            return error
        }
    }

    async getAdvert(id) {
        try {
            const [rows] = await pool.query("SELECT * FROM advert WHERE id =?", [id])
            return rows[0]
        }
        catch (error) {
            return error
        }
    }

    async createAdvert(advert) {
        try {
            let rows = null
            if (advert.image != null) {
                [rows] = await pool.query(`INSERT INTO advert SET ?`, advert)
            }
            else {
                [rows] = await pool.query(`INSERT INTO advert SET title = ?`, advert.title)
            }
            return rows
        }
        catch (error) {
            return error
        }
    }

    async updateAdvert(id, advert) {
        try {
            let rows = null;
            if (advert.image != null) {

                [rows] = await pool.query("UPDATE advert SET? WHERE id =?", [advert, id])
            }
            else {
                [rows] = await pool.query("UPDATE advert SET title = ? WHERE id =?", [advert.title, id])
            }

            return rows
        } catch (error) {
            return error
        }
    }

    async deleteAdvert(id) {
        try {
            const [rows] = await pool.query("DELETE FROM advert WHERE id =?", [id])
            return rows
        }
        catch (error) {
            return error
        }
    }
}

export default new advertService()