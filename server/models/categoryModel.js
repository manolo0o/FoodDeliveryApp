const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category__Image : {
        type : 'string',
        required : 'true',
    },
    category__Name : {
        type : 'string',
        required : 'true',
    },
});

const Category = mongoose.model('Category',categorySchema);
module.exports = Category;