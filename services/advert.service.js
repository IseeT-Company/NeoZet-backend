import { pool } from "../models/db.js"
import Tools from "./tools.js"
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
            if (advert.title != null) {
                [rows] = await pool.query(`INSERT INTO advert SET ?`, advert)
            }
            else {
                [rows] = await pool.query(`INSERT INTO advert SET image = ?`, advert.image)
            }
            return rows
        }
        catch (error) {
            return error
        }
    }

    async updateAdvert(id, advert) {
        try {
            let rows = null
            if (advert.image != null) {
                let adv = await this.getAdvert(id)
                if (adv.image){
                    Tools.deleteFile(adv.image)
                }
                rows = await pool.query("UPDATE advert SET title = ?,image = ? WHERE id =?", [advert.title, advert.image, id])
            }
            else {
                rows = await pool.query("UPDATE advert SET title = ? WHERE id =?", [advert.title, id])
            }
            return rows[0]
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async deleteAdvert(id) {
        try {
            let adv = await this.getAdvert(id)
            if (adv.image){
                Tools.deleteFile(adv.image)
            }
            const rows = await pool.query("DELETE FROM advert WHERE id = ?", [id])
            return rows[0]
        } catch (error) {
            console.log(error)
            return error
        }
    }
}

export default new advertService()