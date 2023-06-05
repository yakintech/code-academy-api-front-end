const express = require('express');
const { productController } = require('../controllers/productController');


const productRoutes = express.Router();



productRoutes.get('/', productController.getAll)
productRoutes.get('/:id', productController.getById)
productRoutes.delete('/:id', productController.delete)
productRoutes.post('/', productController.add)

productRoutes.get('/:id/getallbycategoryId', productController.getAllByCategoryId)


module.exports = {
    productRoutes
}