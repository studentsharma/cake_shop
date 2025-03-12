const mongoose = require('mongoose');

const cakeSchema = mongoose.Schema({
    cake_id : Number,
    price : String,
    image : { type: String, default: "" },
    users : [String]
}) 

module.exports = mongoose.model("cakes", cakeSchema);