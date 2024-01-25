const Show = require('../models/tvshow.model');

module.exports.findAllShows = (req, res) => {
    Show.find()
        .then((allShows) => {
            res.json({ shows: allShows })
            // responding back with an object with one key/value, key: shows value: allshows. Or res.json(allShows)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// .then() is for a successful find query. The find query returns an array of all of our object show documents.
// .then() method takes a call-back function and we are grabbing what returns from .find() (an array of or show objects/documents) under the name allShows.