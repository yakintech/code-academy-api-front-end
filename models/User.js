const { default: mongoose } = require("mongoose");


const UserSchema = mongoose.Schema({
    email:String,
    password:String
})


const User = new mongoose.model('User', UserSchema)


module.exports = {
    User
}