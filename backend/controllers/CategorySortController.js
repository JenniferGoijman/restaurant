const CategorySort = require('../models/CategorySort');

const CategorySortController = {
    getAll(req, res) {
        CategorySort.find()
        .populate('category')
            .then(async categoriesSort => { res.send(categoriesSort); })
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    insert(req, res) {
        CategorySort.create({
            ...req.body
        })
        .then(categorySort => res.status(201).send({
            categorySort,
            message: 'Orden de la categoría creada con éxito'
        }))
        .catch(error => { 
            console.error(error); 
            res.status(500).send(error)})
    },
    update(req, res) {
        CategorySort.findByIdAndUpdate(req.params.categorySort_id, {
            ...req.body
        }, {
            new: true
        })
        .then(categorySort => res.send(categorySort))
        .catch(error => {
            console.error(error)
            res.status(500).send(error)
        })
    },
    delete(req, res) {
        CategorySort.findByIdAndDelete(req.params.categorySort_id)
            .then(categorySort => res.send(categorySort))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    }
}
module.exports = CategorySortController;