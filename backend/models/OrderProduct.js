const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderProductsSchema = new mongoose.Schema({
    Order_id: {
        type: ObjectId,
        ref: 'Order',
        required: true
    },
    Product_id: {
        type: ObjectId,
        ref: 'Product',
        required: true
    },
    observations: {
        type: String
    },
    qtty: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const OrderProducts = mongoose.model('OrderProducts', OrderProductsSchema);

module.exports = OrderProducts;