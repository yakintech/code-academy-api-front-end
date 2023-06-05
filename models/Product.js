const { default: mongoose } = require("mongoose");


const ProductSchema = mongoose.Schema({
    name: String,
    unitPrice: Number,
    stock: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = {
    Product
}