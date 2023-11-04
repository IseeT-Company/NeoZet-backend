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

    async createCategory(category_name) {
        try {
            const rows = await pool.query(`INSERT INTO category SET category_name = ?`, [category_name])
            return rows[0]
        }
        catch (error) {
            return error
        }
    }

    async updateCategory(id, category_name) {
        try {
            const rows = await pool.query("UPDATE category SET category_name = ? WHERE id =?", [category_name, id])
            console.log(123)
            console.log(id, category_name)
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