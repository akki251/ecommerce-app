import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://rose-gorgeous-tadpole.cyclic.app/api',
});

export const getProducts = () => API.get('/products');
export const getProductDetail = (id) => API.get(`/products/${id}`);
export const addProduct = (productData) => API.post('/products', productData);
export const updateProduct = (productData, _id) => API.patch(`/products/${_id}`, productData);
export const removeProduct = (_id) => API.delete(`/products/${_id}`);
