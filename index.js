const express = require('express');
const {categoryRoutes } = require('./routes/categoryRoutes');
const { default: mongoose } = require('mongoose');
const { db } = require('./config/db');
const app = express();
require('dotenv').config()

db.connect();

app.use(express.json())

app.use('/api/categories', categoryRoutes)


app.listen(3000);