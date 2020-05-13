const OrderProduct = require('../models/OrderProduct');

const OrderProductController = {
    getAll(req, res) {
        OrderProduct.find({
                Order_id: req.body.orderId
            })
            .populate('Product')
            .then(async OrderProducts => { res.send(OrderProducts); })
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    getPending(req, res) {
        const OrderId = req.body.orderId;
        OrderProduct.find({
                Order_id: orderId,
                status: 'pending'
            })
            .populate('Product')
            .then(async OrderProducts => { res.send(OrderProducts); })
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    insert(req, res) {
        OrderProduct.create({
                ...req.body
            })
            .then(OrderProduct => res.status(201).send({
                OrderProduct,
                message: 'Item registrado con éxito en la order'
            }))
            .catch(error => {
                console.error(error);
                res.status(500).send(error)
            })
    },
    update(req, res) {
        OrderProduct.findByIdAndUpdate(req.params.OrderProduct_id, {
                ...req.body
            }, {
                new: true
            })
            .then(OrderProduct => res.send({ OrderProduct, message: 'item actualizado con exito en la orden' }))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    },
    delete(req, res) {
        OrderProduct.findByIdAndDelete(req.params.OrderProduct_id)
            .then(OrderProduct => res.send({ OrderProduct, message: 'Iten eliminado con exito de la orden' }))
            .catch(error => {
                console.error(error)
                res.status(500).send(error)
            })
    }
}
module.exports = OrderProductController;