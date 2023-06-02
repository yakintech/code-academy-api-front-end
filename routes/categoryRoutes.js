const express = require('express');
const { categoryController } = require('../controllers/categoryController');

const categoryRoutes = express.Router();



categoryRoutes.get('/', categoryController.getAll)
categoryRoutes.get('/:id', categoryController.getById)
categoryRoutes.post('/', categoryController.add)
categoryRoutes.delete('/:id', categoryController.deleteById)
categoryRoutes.put('/:id', categoryController.update)


module.exports = {
    categoryRoutes
}