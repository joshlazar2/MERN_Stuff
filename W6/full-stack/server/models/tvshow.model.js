const mongoose = require('mongoose');

const TvShow = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "The Title must be 3 or more characters"],
        maxLength: [50, "The Title must not be more than 10 characters"]
    },
    releaseYear: {
        type: Number,
        min: [1950, "Earliest year is 1950"]
    },
    network: {
        type: String,
        required: [true, "Network is required"],
        minLength: [3, "The Network must be 3 or more characters"],
        maxLength: [50, "The Network must not be more than 10 characters"]
    },
    creator: {
        type: String,
        required: [true, "Creator is required"],
        minLength: [3, "The Creator must be 3 or more characters"],
        maxLength: [50, "The Creator must not be more than 10 characters"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
        minLength: [3, "The Genre must be 3 or more characters"],
        maxLength: [50, "The Genre must not be more than 10 characters"]
    }
}, {timestamps: true});

const Show = mongoose.model('Show', TvShow); // mongoDB takes the name of our model, lowercases it, makes it plural and thats the name of our collection

module.exports = Show;


// Schema is the blueprint but if we want to interact (grab, change, etc.) we need the model so we export the model (access in other files since code modularized). To interact with the schema (TvShow) we do so through the model (Show).