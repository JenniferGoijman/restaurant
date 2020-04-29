const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
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
    ProductId: {
        type: ObjectId,
        ref: 'User'
    },
    category: [ObjectId],
    subCategory: [ObjectId]
}, {
    timestamps: true
});

const Product = mongoose.model('Peoduct', ProductSchema);

module.exports = Product;