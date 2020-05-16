const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CategorySortSchema = new mongoose.Schema({
    category: {
        type: ObjectId,
        ref: 'Category'
    },
    index: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const CategorySort = mongoose.model('CategorySort', CategorySortSchema);

module.exports = CategorySort;