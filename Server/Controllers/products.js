const axios = require('axios');

const Product = require('../Models/Product');
const catchAsync = require('../utils/catchAsync');

exports.getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find().sort({ _id: -1 });

  console.log('API  CALLED FROM BACKEND');

  res.status(200).json({
    status: 'success',
    message: 'All products',
    result: products.length,
    data: products,
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  // res.send('check');
  res.status(200).json({
    status: 'success',
    message: 'single product detail',
    data: product,
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const { title, price, description, rating } = req.body;
  const product = await Product.create({
    title,
    price: +price,
    description,
    rating: +rating,
  });

  res.status(200).json({
    status: 'success',
    message: 'Product created',
    data: product,
  });
});
exports.updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: 'success',
    message: 'Product updated',
    data: product,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);

  res.status(200).json({
    status: 'success',
    message: 'single product deleted',
    data: product,
  });
});

exports.deleteProducts = catchAsync(async (req, res, next) => {
  const products = await Product.deleteMany();

  res.status(200).json({
    status: 'success',
    message: 'All products deleted',
  });
});

exports.addProducts = catchAsync(async (req, res, next) => {
  const { data } = await axios.get('https://fakestoreapi.com/products');

  const filteredData = data.map((item) => {
    return {
      title: item.title,
      price: item.price,
      description: item.description,
      rating: item.rating.rate,
      count: item.rating.count,
      category: item.category,
      image: item.image,
    };
  });
  const products = await Product.insertMany(filteredData);

  res.status(200).json({
    status: 'success',
    message: 'PRODUCTS DB RESET',
    products,
  });
});
