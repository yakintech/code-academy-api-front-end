const express = require('express');
const { categoryRoutes } = require('./routes/categoryRoutes');
const { productRoutes } = require('./routes/productRoutes');
const bcrypt = require('bcrypt');
//hash level
const saltRounds = 10;
var jwt = require('jsonwebtoken');



let privateKey = "amonamarth"
const { db } = require('./config/db');
const { User } = require('./models/User');
const app = express();
require('dotenv').config()

db.connect();

app.use(express.json())

app.use((req, res, next) => {

    if (req.url == '/token' || req.url == '/register') {
        next();
    }
    else {
        //kullanıcının bana gönderdiği tokenı header üzerinden aldım
        if (req.headers.authorization) {
            let token = req.headers.authorization.split(' ')[1]
            try {

                jwt.verify(token, privateKey);
                next();

            } catch (error) {
                res.status(401).json({ "msg": "Hayırdır komşu nereye böyle..." })
            }
        }
        else {
            res.status(401).json({ "msg": "Hayırdır komşu nereye böyle..." })
        }


    }

})


app.use('/api/categories', categoryRoutes)
app.use('/api/products', productRoutes)




app.post('/token', (req, res) => {





    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {

                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    if (result) {
                        let token = jwt.sign(req.body.email, privateKey)
                        res.json({ "token": token })
                    }
                    else {
                        res.status(404).json({ "msg": "Not Found!" })

                    }
                });



            }
            else {
                res.status(404).json({ "msg": "Not Found!" })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })

})


app.post('/register', (req, res) => {

    let pwd = req.body.password;

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(pwd, salt, function (err, hash) {
            const user = new User({
                email: req.body.email,
                password: hash
            })

            user.save();

            res.json(user)

        });
    });


})

app.listen(3000);

