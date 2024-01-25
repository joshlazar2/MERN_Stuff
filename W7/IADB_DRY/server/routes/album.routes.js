const AlbumController = require('../controllers/album.controller');

module.exports = app => {
    app.get('/api/allAlbums', AlbumController.findAllAlbums);
    app.post('/api/createAlbum', AlbumController.createAlbum);
    app.get('/api/findAlbum/:id', AlbumController.findOneAlbum);
    app.put('/api/updateAlbum/:id', AlbumController.updateAlbum);
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum);
}