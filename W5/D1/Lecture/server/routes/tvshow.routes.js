const TvShowController = require('../controllers/tvshow.controller');

module.exports = app => {
    app.get('/api/allShows', TvShowController.findAllShows);
    app.post('/api/createShow', TvShowController.createShow);
    app.get('/api/findShow/:id', TvShowController.findOneShow);
    app.put('/api/updateShow/:id', TvShowController.updateExistingShow);
    app.delete('/api/deleteShow/:id', TvShowController.deleteAnExistingShow);
}

