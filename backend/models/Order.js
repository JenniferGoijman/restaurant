const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({
    observations: {
        type: String
    },
    User: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    Product: [{
        _id: {
            type: ObjectId,
            ref: 'Product',
        },
        quantity: Number,
    }],
    numTable: {
        type: String,
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