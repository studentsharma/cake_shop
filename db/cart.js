const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    email : String,
    cakes : [Number]
}) 

module.exports = mongoose.model("cart", cartSchema);