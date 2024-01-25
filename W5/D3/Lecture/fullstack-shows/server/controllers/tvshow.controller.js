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


module.exports.createShow = (req, res) => {
    Show.create(req.body)
        .then((newShow) => {
            res.json({show: newShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// run create method, add req.body into the database and return it back to us as newShow


module.exports.findOneShow = (req, res) => {
    console.log(req.params);
    Show.findOne({_id: req.params.id})
        .then((oneShow) => {
            res.json({Show: oneShow})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// The most common things we grab from req (request), are the body and the params. Both are objects. The body will contain form data. Params contains paramters from our url path. We pass :id to our url path making id a paramater. So req.params is now an object {id: (whatever we put in our path) }. We pass the value from this object into our FindOne() query to find that whole object/document.


module.exports.updateExistingShow = (req, res) => {
    Show.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true } // new: true line returns the updated object/show/document information to the .then() method/statement. If we didnt have this it would send it back before it was updated.
    )
        .then(updatedShow => {
            res.json({ Show: updatedShow })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

// This query takes in the id which we pass through as a parameter, and it also takes in the req.body (form information)


module.exports.deleteAnExistingShow = (req, res) => {
    Show.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}