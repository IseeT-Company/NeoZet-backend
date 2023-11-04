import categoryService from "../services/category.service.js"

class categoryController {
    async getCategories(req, res) {
        const notes = await categoryService.getCategories()
        res.send(notes)
    }


    async getCategory(req, res) {
        const id = req.params.id
        const note = await categoryService.getCategory(id)
        res.send(note)
    }

    async deleteCategory(req, res) {
        const id = req.params.id
        console.log(123)
        const note = await categoryService.deleteCategory(id)
        res.send(note)
    }

    async createCategory(req, res) {
        const {category_name} = req.body
        const note = await categoryService.createCategory(category_name)
        res.status(201).send(note)
    }

    async updateCategory(req, res) {
        const id = req.params.id
        const {category_name} = req.body
        const note = await categoryService.updateCategory(id, category_name)
        res.status(201).send(note)
    }
}

export default new categoryController()