const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    email : String,
    cakes : [Number]
}) 

module.exports = mongoose.model("order", orderSchema);