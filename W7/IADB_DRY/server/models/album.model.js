const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    albumName: {
        type: String,
        required: [true, "Album Name is required"],
        minLength: [3, "The Album Name must be 3 or more characters"],
        maxLength: [50, "The Album Name must not be more than 50 characters"]
    },
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minLength: [3, "The Artist must be 3 or more characters"],
        maxLength: [50, "The Artist must not be more than 50 characters"]
    },
    releaseYear: {
        type: Number,
        min: [1920, "Earliest year is 1920"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
        minLength: [3, "The Genre must be 3 or more characters"],
        maxLength: [25, "The Genre must not be more than 25 characters"]
    },
    explicit: {
        type: Boolean,
        required: [true, "You must fill this out"]
    }
}, {timestamps: true});

const Album = mongoose.model('Album', AlbumSchema); // mongoDB takes the name of our model, lowercases it, makes it plural and thats the name of our collection

module.exports = Album;


// Schema is the blueprint but if we want to interact (grab, change, etc.) we need the model so we export the model (access in other files since code modularized). To interact with the schema (AlbumScehma) we do so through the model (Album).