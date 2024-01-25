const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "The Title must be 3 or more characters"],
        maxLength: [50, "The Title must not be more than 10 characters"]
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "The Description must be 5 or more characters"],
        maxLength: [100, "The Description must not be more than 100 characters"]
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema); // mongoDB takes the name of our model, lowercases it, makes it plural and thats the name of our collection

module.exports = Product;


