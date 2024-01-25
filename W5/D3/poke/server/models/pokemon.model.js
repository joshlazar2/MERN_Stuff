const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    image: {
        type: String
    },
    nickname: {
        type: String,
        required: [true, "Nickname is required"],
        minLength: [3, "The Nickname must be 3 or more characters"]
    }
}, {timestamps: true});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;