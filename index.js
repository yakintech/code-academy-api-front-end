const express = require('express');
const { categoryRoutes } = require('./routes/categoryRoutes');
const { productRoutes } = require('./routes/productRoutes');

const { db } = require('./config/db');
const app = express();
require('dotenv').config()

db.connect();

app.use(express.json())

app.use('/api/categories', categoryRoutes)


app.use('/api/products', productRoutes)


app.listen(3000);

