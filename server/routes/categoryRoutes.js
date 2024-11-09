const express = require('express');
const router = express.Router();


const {
    get__AllCategories,
    get__CategoriesByID
} = require ( '../controller/categoryController.js' ) ; 

//FIND
router.get('/', get__AllCategories);
router.get('/:id', get__CategoriesByID);

module.exports = router;
