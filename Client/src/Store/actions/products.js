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
  } catch (error) {}
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
    const { data } = await api.addProduct(productData);

    dispatch({ type: 'ADD_PRODUCT', payload: data.data });
    dispatchSuccessAlert(dispatch, data.message);
    setTimeout(() => {
      history.push('/');
    }, 1500);
  } catch (error) {
    dispatchErrorAlert(error.message);
  }
  dispatch({ type: STOP_LOADING });
};

export const updateProductReq = (productData, history, _id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.updateProduct(productData, _id);

    dispatch({ type: 'UPDATE_PRODUCT', payload: data });
    dispatchSuccessAlert(dispatch, 'Product updated');
    setTimeout(() => {
      history.push('/');
    }, 1500);
  } catch (error) {
    dispatchErrorAlert(dispatch, 'something went wrong');
  }
  dispatch({ type: STOP_LOADING });
};

export const removeProductReq = (_id) => async (dispatch) => {
  try {
    await api.removeProduct(_id);
    dispatch({ type: REMOVE_PRODUCT, payload: _id });
    dispatchSuccessAlert(dispatch, 'Product deleted');
  } catch (error) {
    dispatchSuccessAlert(dispatch, 'Some error! Please try again');
  }
};

const dispatchSuccessAlert = async (dispatch, message) => {
  dispatch({ type: 'SUCCESS', payload: message });
};
const dispatchErrorAlert = async (dispatch, message) => {
  dispatch({ type: 'ERROR', payload: message });
};
