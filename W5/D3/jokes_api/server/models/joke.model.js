const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchLine: {
        type: String
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;


// Schema is the blueprint but if we want to interact (grab, change, etc.) we need the model so we export the model (access in other files since code modularized). To interact with the schema (JokeSchema) we do so through the model (Joke).