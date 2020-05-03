const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    CategoryId: {
        type: ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;