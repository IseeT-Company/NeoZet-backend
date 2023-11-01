import { pool } from "../models/db.js"


class serviceService {
    async getServices() {
        try {
            const rows = await pool.query("SELECT * FROM service")
            return rows[0]
        } catch (error) {
            return error
        }

    }


    async getService(id) {
        try {
            const rows = await pool.query("SELECT * FROM service WHERE id = $1", [id])
            return rows[0]
        } catch (error) {
            return error
        }

    }

    async createService(service) {
        try {
            const rows = await pool.query("INSERT INTO service SET ?", service)
            return rows[0]
        } catch (error) {
            return error
        }

    }

    async updateService(id, service) {
        try {
            const rows = await pool.query("UPDATE service SET name = $1,description = $2,price = $3 WHERE id = $4", [service.name, service.description, service.price, id])
            return rows[0]
        } catch (error) {
            return error
        }

    }

    async deleteService(id) {
        try {
            const rows = await pool.query("DELETE FROM service WHERE id = ?", [id])
            return rows[0]
        } catch (error) {
            return error
        }

    }

}


export default new serviceService();