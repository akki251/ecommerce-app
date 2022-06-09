import axios from 'axios';
import { FETCH_ALL, REMOVE_PRODUCT, START_LOADING, STOP_LOADING } from '../actionConstants.js';
import * as api from '../api/index.js';

export const getAllProductsReq = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.getProducts();

    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductDetailReq = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.getProductDetail(id);

    dispatch({ type: 'FETCH_PRODUCT', payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const addProductReq = (productData, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.addProduct(productData);

    dispatch({ type: 'ADD_PRODUCT', payload: data });
    dispatch({ type: STOP_LOADING });
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProductReq = (productData, history, _id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.updateProduct(productData, _id);

    dispatch({ type: 'UPDATE_PRODUCT', payload: data });
    dispatch({ type: STOP_LOADING });
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const removeProductReq = (_id) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    await api.removeProduct(_id);
    dispatch({ type: REMOVE_PRODUCT, payload: _id });
    // dispatch({ type: STOP_LOADING });
    // history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};
