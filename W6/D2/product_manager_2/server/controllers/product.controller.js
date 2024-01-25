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
