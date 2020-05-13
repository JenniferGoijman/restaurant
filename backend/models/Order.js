const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({
    User_id: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    numTable: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    totalPay: Number
}, {
    timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;