import {pool} from "../models/db.js"


class portfolioService {
    async getPortfolios() {
        const [rows] = await pool.query("SELECT * FROM portfolio")
        return rows
    }

    async getPortfolio(id) {
        const [rows] = await pool.query("SELECT * FROM portfolio WHERE id =?", [id])
        return rows
    }

    async createPortfolio(portfolio) {
        const [rows] = await pool.query("INSERT INTO portfolio SET?", portfolio)
        return rows
    }

    async updatePortfolio(id, portfolio) {
        const [rows] = await pool.query("UPDATE portfolio SET? WHERE id =?", [portfolio, id])
        return rows
    }

    async deletePortfolio(id) {
        const [rows] = await pool.query("DELETE FROM portfolio WHERE id =?", [id])
        return rows
    }
}

export default new portfolioService()