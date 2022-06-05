const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  image: {
    type: String,
    default:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixselo.com%2Ftestimonial%2Fneo-systek%2Fdummy-placeholder-image-400x400%2F&psig=AOvVaw2TNmUx316j9u0S1U5i4cnM&ust=1654528068970000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJj5pcHLlvgCFQAAAAAdAAAAABAD',
  },
  category: String,
  count: Number,
  rating: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
