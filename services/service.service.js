import { pool } from "../models/db.js"

import Tools from "./tools.js"

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
            const [rows] = await pool.query("SELECT * FROM service WHERE id = ?", [id])
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
            let rows = null
            if (service.image != null) {
                let srv = await this.getService(id)
                if (srv.image){
                    Tools.deleteFile(srv.image)
                }
                rows = await pool.query("UPDATE service SET title = ?, description = ?, image = ? WHERE id =?", [service.title, service.description, service.image, id])
            }
            else {
                rows = await pool.query("UPDATE service SET title = ?, description = ? WHERE id =?", [service.title, service.description, id])
            }
            return rows[0]
        } catch (error) {
            console.log(error)
            return error
        }

    }

    async deleteService(id) {
        try {
            let srv = await this.getService(id)
            if (srv.image){
                Tools.deleteFile(srv.image)
            }
            const rows = await pool.query("DELETE FROM service WHERE id = ?", [id])
            return rows[0]
        } catch (error) {
            return error
        }

    }

}


export default new serviceService();