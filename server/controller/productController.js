const products = require('../models/productModel.js');

// GET all products

const get__All__Products = async (req,res) => {
    try {
        const products = await products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

