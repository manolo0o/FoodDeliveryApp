const Products = require('../models/productModel.js');

// GET ALL

const get__AllProducts = async (req,res) => {
    try {
        const products = await Products.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// GET BY ID

const get__ProductsById = async (req,res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id);
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

// EXPORTS

module.exports = {
    get__AllProducts,
    get__ProductsById
}