const express = require('express');
const Product = require('../Models/Product');

const { getProducts } = require('../Controllers/Products.js');
const router = express.Router();

router.get('/products', getProducts);

module.exports = router;
