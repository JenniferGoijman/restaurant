const Order = require('../models/Order');

const OrderController = {
    getAll(req, res) {
        Order.find()
            .populate('user')
            .then(orders => res.send(orders))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'There was a problem trying get the orders'
                })
            })
    },
    insert(req, res) {
        req.body.status = 'pending';
        Order.create(req.body)
            .then(order => res.send(order))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'There was a problem trying insert the order'
                })
            })
    },
    update(req, res) {
        Order.findByIdAndUpdate(req.params.order_id, {
            ...req.body
        }, {
            new: true
        })
        .then(order => res.send(order))
        .catch(error => {
            console.error(error)
            res.status(500).send({
                message: 'There was a problem trying updating the order'
            })
        })
    },
    delete(req, res) {
        Order.findByIdAndDelete(req.body.id)
            .then(order => res.send({ order, messaje: 'Order deleted correctly' }))
            .catch(error => {
                console.error(error)
                res.status(500).send({
                    message: 'There was a problem trying removing the order'
                })
            })
    }
}

module.exports = OrderController