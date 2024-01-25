const AlbumController = require('../controllers/album.controller');
const {authenticate} = require('../config/jwt.config') // we bring in the authenticate function, which authenticates our cookie/userToken and associate it with whichever album route we want to authenticate before running. In this case, create, because we are creating albums and storing the user _id that is stored in our userToken. So we know who posted that album.
// In more detailed terms, when somone clicks post an album, and it links to our route '/api/createAlbum', we will first run authenticate which verifies the jsonwebtoken, take in the cookies (userToken cookie), verify it with our secret key and check expiration of cookie, then run call-back function whcih takes in err and payload, the payload is the decoded information inside the JWT that we stored (email and _ID)

module.exports = app => {
    app.get('/api/allAlbums', AlbumController.findAllAlbums);
    app.get('/api/allAlbumsByLoggedInUser', authenticate ,AlbumController.allAlbumsByLoggedInUser);
    app.post('/api/createAlbum', authenticate, AlbumController.createAlbum);
    app.get('/api/findAlbum/:id', AlbumController.findOneAlbum);
    app.put('/api/updateAlbum/:id', AlbumController.updateAlbum);
    app.delete('/api/deleteAlbum/:id', AlbumController.deleteAlbum);
}