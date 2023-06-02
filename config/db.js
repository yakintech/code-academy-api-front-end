const { default: mongoose } = require("mongoose");


const db = {
    connect: async () => {
        console.log('process.env.CONNECTION',process.env.CONNECTION);
        try {
            await mongoose.connect(process.env.CONNECTION)
            console.log('CONNECTED!');
        } catch (error) {
            console.log('ERROR', error);
        }
    }
}

module.exports = { 
    db }