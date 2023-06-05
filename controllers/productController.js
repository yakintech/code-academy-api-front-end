const { Product } = require("../models/Product")


const productController = {
    getAll: (req, res) => {

        let limitProduct = req.query.limit;

        console.log(limitProduct);

        Product.find()
            .limit(limitProduct)
            .populate("category")
            .select("name unitPrice stock")
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
    },
    add: (req, res) => {

        let product = new Product({
            name: req.body.name,
            unitPrice: req.body.unitPrice,
            stock: req.body.stock,
            category: req.body.category
        })

        product.save()

        res.json(product)
    },
    getAllByCategoryId: (req, res) => {
        let id = req.params.id

        Product.find({ "category": id }).populate("category")
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    delete: (req, res) => {
        let id = req.params.id;

        Product.findByIdAndDelete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    productController
}