const PokemonController = require('../controllers/pokemon.controller');

module.exports = (app) => {
    app.get('/api/pokemon', PokemonController.getAllPokemon);
    app.post('/api/createPokemon', PokemonController.createPokemon);
    app.get('/api/findPokemon/:id', PokemonController.getOnePokemon);
    app.put('/api/updatePokemon/:id', PokemonController.updatePokemon);
    app.delete('/api/deletePokemon/:id', PokemonController.deletePokemon);
}