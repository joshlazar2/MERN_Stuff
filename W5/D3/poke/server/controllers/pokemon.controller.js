const Pokemon = require('../models/pokemon.model');



// Previsouly we exported each controller function, below we are exporting an object containing controller functions so in our routes file we will call on each key in this exported object. In turn we will be accessing the keys value pair, aka the function.

module.exports = {
    getAllPokemon: (req, res) => {
        Pokemon.find()
            .then((allPokemon) => {
                res.status(200).json({ Pokemon: allPokemon} )
                console.log(allPokemon);
            })
            .catch((err) => {
                res.status(400).json({ message: 'Something went wrong', error: err })
            });
    },

    createPokemon: (req, res) => {
        Pokemon.create(req.body)
            .then((newPokemon) => {
                res.json(newPokemon) // In our case dont need to put newPokemon in an object like in line 11
            })
            .catch((err) => {
                res.status(400).json({ message: 'Something went wrong', error: err })
            });
    },

    getOnePokemon: (req, res) => {
        Pokemon.findOne({_id: req.params.id})
            .then((onePokemon) => {
                res.json(onePokemon)
            })
            .catch((err) => {
                res.status(400).json({ message: 'Something went wrong', error: err })
            });
    },

    updatePokemon: (req, res) => {
        Pokemon.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true } // new: true line returns the updated object/show/document information to the .then() method/statement. If we didnt have this it would send it back before it was updated.
        )
            .then(updatedPokemon => {
                res.json(updatedPokemon)
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
    },

    deletePokemon: (req, res) => {
        Pokemon.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
    }
}