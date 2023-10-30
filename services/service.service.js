import {pool} from "../models/db.js"


class serviceService{
    async getServices(){
        const rows = await pool.query("SELECT * FROM service")
        return rows[0]
    }


    async getService(id){
        const rows = await pool.query("SELECT * FROM service WHERE id = $1",[id])
        return rows[0]
    }

    async createService(service){
        const rows = await pool.query("INSERT INTO service SET ?",service)
        return rows[0]
    }

    async updateService(id,service){
        const rows = await pool.query("UPDATE service SET name = $1,description = $2,price = $3 WHERE id = $4",[service.name,service.description,service.price,id])
        return rows[0]
    }

    async deleteService(id){
        const rows = await pool.query("DELETE FROM service WHERE id = ?",[id])
        return rows[0]
    }

}


export default new serviceService();