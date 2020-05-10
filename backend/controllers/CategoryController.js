const Category = require('../models/Category');

const CategoryController = {
    getAll(req, res) {
        Category.find()
            .then(async categories => { res.send(categories); })
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    insert(req, res) {
        Category.create({
            ...req.body
        })
        .then(category => res.status(201).send({
            category,
            message: 'Categoría creada con éxito'
        }))
        .catch(error => { 
            console.error(error); 
            res.status(500).send(error)})
    },
    update(req, res) {
        Category.findByIdAndUpdate(req.params.category_id, {
            ...req.body
        }, {
            new: true
        })
        .then(category => res.send(category))
        .catch(error => {
            console.error(error)
            res.status(500).send(error)
        })
    },
    delete(req, res) {
        Category.findByIdAndDelete(req.params.category_id)
            .then(category => res.send(category))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    }
}
module.exports = CategoryController;