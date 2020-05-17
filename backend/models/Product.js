const mongoose = require('mongoose');
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
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    ProductId: {
        type: ObjectId,
        ref: 'Product'
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;