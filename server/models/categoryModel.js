const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category__Image: {
        type: String,
        required: true,
    },
    category__Name: {
        type: String,
        required: true,
    },
});

const Category = mongoose.model('categories', categorySchema);
module.exports = Category;
