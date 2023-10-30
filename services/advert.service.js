import {pool} from "../models/db.js"

class advertService {

    async getAdverts() {
        const [rows] = await pool.query("SELECT * FROM advert")
        return rows
    }

    async getAdvert(id) {
        const [rows] = await pool.query("SELECT * FROM advert WHERE id =?", [id])
        return rows[0]
    }

    async createAdvert(advert) {
        let rows = null
        if (advert.image != null){
            [rows] = await pool.query(`INSERT INTO advert SET ?`, advert)
        }
        else{
            [rows] = await pool.query(`INSERT INTO advert SET title = ?`, advert.title)
        }
        return rows
    }

    async updateAdvert(id, advert) {
        let rows = null;
        if (advert.image != null){
            [rows] = await pool.query("UPDATE advert SET? WHERE id =?", [advert, id])
        }
        else{
            [rows] = await pool.query("UPDATE advert SET title = ? WHERE id =?", [advert.title, id])
        }
        return rows
    }
    
    async deleteAdvert(id) {
        const [rows] = await pool.query("DELETE FROM advert WHERE id =?", [id])
        return rows
    }
}

export default new advertService()