const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Integer,
        required: true
    },
    OrderId: {
        type: ObjectId,
        ref: 'Order'
    },
    UserId: ObjectId,
    Product: [{ ObjectId, quantity }],
    numTable: {
        type: Integer,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;