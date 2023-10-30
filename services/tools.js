import fs from "fs"
import path from "path"
class Tools{
    changePath(filepath){
        return filepath.replaceAll(/\\/g, "\/")
    }

    deleteFile(filepath){
        let fp = `${path.resolve()}/static${filepath}`
        console.log(fp)
        fs.unlink(fp, (err) =>{
            if (err){
                console.log(err)
            }
            else{
                console.log(`File ${fp} succ deleted`)
            }
        })

    }
}

export default new Tools()