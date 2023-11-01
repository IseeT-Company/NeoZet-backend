import {pool} from "../models/db.js"
import Tools from "./tools.js"
class partnerService {

    async getPartners() {
        try {
        const [rows] = await pool.query("SELECT * FROM partner")
        return rows    
        } catch (error) {
            return error
        }
        
    }

    async getPartner(id) {
        try {
        const [rows] = await pool.query("SELECT * FROM partner WHERE id =?", [id])
        return rows[0]    
        } catch (error) {
            return error
        }
        
    }

    async createPartner(partner) {
        try {
        const [rows] = await pool.query(`INSERT INTO partner SET ?`, partner)
        return rows    
        } catch (error) {
            return error
        }
        
    }

    async updatePartner(id, partner) {
        try {
            let rows = null
        if (partner.image != null){
            let prtn = await this.getPartner(id)
            Tools.deleteFile(prtn.image)
            [rows] = await pool.query("UPDATE partner SET? WHERE id =?", [partner, id])
        }
        else{
            [rows] = await pool.query("UPDATE partner SET name = ? WHERE id =?", [partner.name, id])
        }
        return rows
        } catch (error) {
            return error
        }
        
    }

    async deletePartner(id) {
        try {
            let prtn = await this.getPartner(id)
        Tools.deleteFile(prtn.image)
        const [rows] = await pool.query("DELETE FROM partner WHERE id =?", [id])
        return rows
        } catch (error) {
            return error
        }
        
    }
}

export default new partnerService()