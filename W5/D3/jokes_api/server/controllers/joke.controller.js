const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
            
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => {
            res.json({joke: newJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports.findOneJoke = (req, res) => {
    console.log(req.params);
    Joke.findOne({_id: req.params.id})
        .then((oneJoke) => {
            res.json({Joke: oneJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true } 
    )
        .then(updatedJoke => {
            res.json({ Joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

