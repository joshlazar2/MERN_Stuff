const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)
            // responding back with an object with one key/value, key: shows value: allshows. Or res.json(allShows)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneProduct = (req, res) => {
    console.log(req.params);
    Product.findOne({_id: req.params.id})
        .then((oneProduct) => {
            res.json(oneProduct)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true } // new: true line returns the updated object/show/document information to the .then() method/statement. If we didnt have this it would send it back before it was updated.
    )
        .then(updatedProduct => {
            res.json({ Product: updatedProduct })
        })
        .catch((err) => {
            res.status(400).json(err) // pay attention to this, this makes our errors easier to catch in state on front end. On front end we only have to use err.response.data.errors now but we need status 400
        });}

// This query takes in the id which we pass through as a parameter, and it also takes in the req.body (form information)


module.exports.deleteAProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}