const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
// constant
// created a schema
const ProductSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    Description:{
        type: String,
        required: false
    },
    price:{
        type: Number,
        required: true
    }
    
}); 

module.exports = mongoose.model('Product', ProductSchema);