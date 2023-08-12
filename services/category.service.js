import {pool} from "../models/db.js"


class categoryService {
    async getCategories() {
        const rows = await pool.query("SELECT * FROM category")
        return rows[0]
    }

    async getCategory(id) {
        const rows = await pool.query("SELECT * FROM category WHERE id =?", [id])
        return rows[0]
    }

    async createCategory(category) {
        const rows = await pool.query("INSERT INTO category SET?", category)
        return rows[0]
    }

    async updateCategory(id, category) {
        const rows = await pool.query("UPDATE category SET? WHERE id =?", [category, id])
        return rows[0]
    }

    async deleteCategory(id) {
        const rows = await pool.query("DELETE FROM category WHERE id =?", [id])
        return rows[0]
    }
}

export default new categoryService()