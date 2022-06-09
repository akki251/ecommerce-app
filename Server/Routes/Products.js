const express = require('express');
const Product = require('../Models/Product');

const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  addProducts,
  deleteProducts,
} = require('../Controllers/products.js');
const router = express.Router();

router.post('/addProducts', addProducts);
router.delete('/deleteProducts', deleteProducts);
router.route('/products').get(getProducts).post(createProduct);
router.route('/products/:id').get(getProduct).delete(deleteProduct).patch(updateProduct);

module.exports = router;
