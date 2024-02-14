const ProductController = require('../controllers/product.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
  app.get('/api/products', ProductController.findAllProducts);
  app.get(
    '/api/products/:id',
    authenticate,
    ProductController.findOneSingleProduct,
  );
  app.post('/api/products', ProductController.createNewProduct);
  app.patch('/api/products/:id', ProductController.updateExistingProduct);
  app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);
};
