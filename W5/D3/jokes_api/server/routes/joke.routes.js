const JokesController = require('../controllers/joke.controller');

module.exports = app => {
    app.get('/api/allJokes', JokesController.findAllJokes);
    app.post('/api/createJoke', JokesController.createJoke);
    app.get('/api/findJoke/:id', JokesController.findOneJoke);
    app.put('/api/updateJoke/:id', JokesController.updateExistingJoke);
    app.delete('/api/deleteJoke/:id', JokesController.deleteAnExistingJoke);
}