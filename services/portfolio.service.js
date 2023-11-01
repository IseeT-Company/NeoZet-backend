import {pool} from "../models/db.js"
import Tools from "./tools.js"


class portfolioService {
    async getPortfolios() {
        try {
            const [rows] = await pool.query("SELECT * FROM portfolio JOIN category ON category.id = portfolio.category_id")
        return rows
        } catch (error) {
            return error
        }
        
    }

    async getPortfolio(id) {
        try {
        const [rows] = await pool.query("SELECT * FROM portfolio WHERE id =?", [id])
        return rows[0]    
        } catch (error) {
            return error
        }
        
    }

    async createPortfolio(portfolio) {
        try {
        const [rows] = await pool.query("INSERT INTO portfolio SET?", portfolio)
        return rows    
        } catch (error) {
            return error
        }
        
    }

    async updatePortfolio(id, portfolio) {
        try {
            let rows = null
        if (portfolio.image != null){
            let prtf = await this.getPortfolio(id)
            Tools.deleteFile(prtf.src)
            [rows] = await pool.query("UPDATE portfolio SET? WHERE id =?", [portfolio, id])
        }
        else{
            [rows] = await pool.query("UPDATE portfolio SET name = ?, category_id = ? WHERE id =?", [portfolio.name, portfolio.category_id, id])
        }
        return rows
        } catch (error) {
            return error
        }
        
    }

    async deletePortfolio(id) {
        try {
            let prtf = await this.getPortfolio(id)
        Tools.deleteFile(prtf.src)
        const [rows] = await pool.query("DELETE FROM portfolio WHERE id =?", [id])
        return rows
        } catch (error) {
            return error
        }
        
    }
}

export default new portfolioService()