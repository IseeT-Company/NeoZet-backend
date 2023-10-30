import {pool} from "../models/db.js"
import {nanoid} from "nanoid";

class authService{
    async getUser(username){
        const [rows] = await pool.query("SELECT * FROM user WHERE username =?", [username])
        if (rows.length > 0){
            return rows[0]
        }
        return []
    }

    async setTempPassword(username, password){
        const [rows] = await pool.query("UPDATE user SET temp_password = ? WHERE username = ?", [password, username])
        if (rows.affectedRows > 0){
            return await this.setActivationLink(username)
        }
        return null
    }

    async setActivationLink(username){
        let link = nanoid(20)
        const [rows] = await pool.query("UPDATE user SET activation_link = ? WHERE username = ?", [link, username])
        if (rows.affectedRows > 0){
            return link
        }
        return null
    }

    async verifyActivationLink(link){
        let [rows] = await pool.query("SELECT username, temp_password FROM user WHERE activation_link = ?", [link])
        if (rows.length > 0){
            let res = await pool.query("UPDATE user SET password = ?, activation_link = ? WHERE username = ?", [rows[0].temp_password, "", rows[0].username])
            console.log(res)
            if (res){
                return true
            }
        }
        return false
    }
}

export default new authService()
