const Product = require('../Models/Product');
const catchAsync = require('../utils/catchAsync');

exports.getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    message: 'All products',
    result: products.length,
    data: products,
  });
});
