const Category = require('../models/categoryModel.js');

//GET ALL

const get__AllCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        if (!categories) {
            return res.status(404).json({ message: "No categories found" });
        }
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error al obtener categorías:", error.message);
        res.status(500).json({ message: error.message });
    }
};


// GET BY ID

const get__CategoriesByID = async (req,res) => {
    try{
        const { id } = req.params;
        const category = await Category.findById(id);
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