const express = require('express');
const { productController } = require('../controllers/productController');


const productRoutes = express.Router();



productRoutes.get('/', productController.getAll)
productRoutes.get('/:id', productController.getById)

module.exports = {
    productRoutes
}