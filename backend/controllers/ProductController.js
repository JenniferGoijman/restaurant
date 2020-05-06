const Product = require('../models/Product');

const ProductController = {
    getAll(req, res) {
        Product.find()
            .then(async products => { res.send(products); })
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    insert(req, res) {
        Product.create({
            ...req.body
        })
        .then(product => res.status(201).send({
            product,
            message: 'Producto creado con éxito'
        }))
        .catch(error => { 
            console.error(error); 
            res.status(500).send(error)})
    },
//     update(req, res) {
//         Product.findByIdAndUpdate(req.params.product_id, {
//                 ...req.body,
//                 user: req.user._id
//             }, {
//                 new: true
//             })
//             .then(post => res.send(product))
//             .catch(error => {
//                 console.error(error)
//                 res.status(500).send(error)
//             })
//     },
    delete(req, res) {
        Product.findByIdAndDelete(req.params.product_id)
            .then(product => res.send(product))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    }
}
module.exports = ProductController;