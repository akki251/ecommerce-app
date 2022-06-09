const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  image: {
    type: String,
    default: 'https://dummyimage.com/300/09f/fff.png',
  },
  category: {
    type: String,
    default: 'others',
  },
  count: {
    type: Number,
    default: 100,
  },
  rating: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
