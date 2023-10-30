import {pool} from "../models/db.js"
import Tools from "./tools.js"


class portfolioService {
    async getPortfolios() {
        const [rows] = await pool.query("SELECT * FROM portfolio")
        return rows
    }

    async getPortfolio(id) {
        const [rows] = await pool.query("SELECT * FROM portfolio WHERE id =?", [id])
        return rows[0]
    }

    async createPortfolio(portfolio) {
        const [rows] = await pool.query("INSERT INTO portfolio SET?", portfolio)
        return rows
    }

    async updatePortfolio(id, portfolio) {
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
    }

    async deletePortfolio(id) {
        let prtf = await this.getPortfolio(id)
        Tools.deleteFile(prtf.src)
        const [rows] = await pool.query("DELETE FROM portfolio WHERE id =?", [id])
        return rows
    }
}

export default new portfolioService()