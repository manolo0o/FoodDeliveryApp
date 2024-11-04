const express = require('express');
const products = require('../models/productModel.js');
const router = express.Router();

const {
    get__AllProducts,
    get__ProductsById
} = require ( '../controller/productController.js' ) ; 

// FIND 
router.get('/', get__AllProducts);
router.get('/:id', get__ProductsById);

module.exports = router;