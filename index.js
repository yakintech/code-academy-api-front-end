const express = require('express');
const {categoryRoutes } = require('./routes/categoryRoutes');
const { default: mongoose } = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://front-end-academy:lJqMb0eJXIVAEo4Q@cluster0.imfaisw.mongodb.net/academydb')

app.use(express.json())

app.use('/api/categories', categoryRoutes)


app.listen(3000);