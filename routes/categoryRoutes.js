const express = require('express');
const { categoryController } = require('../controllers/categoryController');
const { body } = require('express-validator');
const { validate } = require('../middleware/Validation');

const categoryRoutes = express.Router();



categoryRoutes.get('/', categoryController.getAll)
categoryRoutes.get('/:id', categoryController.getById)

categoryRoutes.post(
    '/',
    body('name').notEmpty().withMessage('Name alanı boş geçilemez!'),
    validate,
    categoryController.add
)


categoryRoutes.delete('/:id', categoryController.deleteById)
categoryRoutes.put('/:id', categoryController.update)


module.exports = {
    categoryRoutes
}