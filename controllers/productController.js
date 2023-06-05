const { Product } = require("../models/Product")


const productController = {
    getAll: (req, res) => {

        Product.find().populate("category")
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    getById: (req, res) => {
        let id = req.params.id

        Product.findById(id).populate("category")
            .then(data => {
                if (data)
                    res.json(data)
                else
                    res.status(404).json({});
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    productController
}