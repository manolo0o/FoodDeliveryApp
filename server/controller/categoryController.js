const categories = require('../models/categoryModel.js');

//GET ALL

const get__AllCategories = async (req,res) => {
    try{
        const categories = await categories.find();
        res.status(200).json(categories)
    } catch ( error ) {
        res.status(500).json({message: error.message});
    }
}

// GET BY ID

const get__CategoriesByID = async (req,res) => {
    try{
        const { id } = req.params;
        const category = await categories.findById(id);
        res.status(200).json(category);
    } catch ( error ) {
        res.status(500).json({message: error.message});
    }
}

// EXPORTS

module.exports = {
    get__AllCategories,
    get__CategoriesByID
}