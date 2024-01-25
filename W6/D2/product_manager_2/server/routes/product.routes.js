const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/allProducts', ProductController.findAllProducts);
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/findProduct/:id', ProductController.findOneProduct);
}

