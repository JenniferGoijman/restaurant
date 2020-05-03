const mongoose = require('mongoose');
const Decimal = mongoose.Schema.Types.Decimal128;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Decimal,
        required: true
    },
    ProductId: {
        type: ObjectId,
        ref: 'Product'
    },
    category: [ObjectId],
    subCategory: [ObjectId]
}, {
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;