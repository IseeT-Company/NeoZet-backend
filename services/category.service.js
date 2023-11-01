import { pool } from "../models/db.js"


class categoryService {
    async getCategories() {
        try {
            const rows = await pool.query("SELECT * FROM category")
            return rows[0]
        }
        catch (error) {
            return error
        }
    }

    async getCategory(id) {
        try {
            const rows = await pool.query("SELECT * FROM category WHERE id =?", [id])
            return rows[0]
        }
        catch (error) {
            return error
        }
    }

    async createCategory(category) {
        try {
            const rows = await pool.query("INSERT INTO category (name) VALUES ?", category)
            return rows[0]
        }
        catch (error) {
            return error
        }
    }

    async updateCategory(id, category) {
        try {
            const rows = await pool.query("UPDATE category SET? WHERE id =?", [category, id])
            return rows[0]
        }
        catch (error) {
            return error
        }

    }

    async deleteCategory(id) {
        try {
            const rows = await pool.query("DELETE FROM category WHERE id =?", [id])
            return rows[0]
        }
        catch (error) {
            return error
        }
    }
}

export default new categoryService()