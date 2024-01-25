const mongoose = require('mongoose');

const TvShow = new mongoose.Schema({
    title: {
        type: String
    },
    releaseYear: {
        type: Number
    },
    network: {
        type: String
    },
    creator: {
        type: String
    },
    genre: {
        type: String
    }
});

const Show = mongoose.model('Show', TvShow);

module.exports = Show;


// Schema is the blueprint but if we want to interact (grab, change, etc.) we need the model so we export the model (access in other files since code modularized). To interact with the schema (TvShow) we do so through the model (Show).