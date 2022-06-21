import {
  ADD_PRODUCT,
  FETCH_ALL,
  REMOVE_PRODUCT,
  START_LOADING,
  STOP_LOADING,
} from '../actionConstants';
const products = (state = { products: [], originalProducts: [], isLoading: false }, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      return {
        ...state,
        products: action.payload,
        originalProducts: action.payload,
      };
    }
    case 'FETCH_PRODUCT': {
      return {
        ...state,
        product: action.payload,
      };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        products: [...state.products, action.payload],
        originalProducts: products,
      };
    }
    case 'UPDATE_PRODUCT': {
      state.products = [...state.products].map((prod) =>
        prod._id !== action.payload._id ? prod : action.payload,
      );

      state.originalProducts = state.products;
    }
    // eslint-disable-next-line
    case REMOVE_PRODUCT: {
      const _id = action.payload;
      const filteredProducts = [...state.products].filter((prod) => prod._id !== _id);
      return {
        ...state,
        products: filteredProducts,
        originalProducts: filteredProducts,
      };
    }
    case START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
      /* falls through */
    }

    case 'LOAD_SEARCH_PRODUCTS': {
      if (action.payload === '') {
        return { ...state, products: state.originalProducts };
      }

      const searchedProducts = state.originalProducts.filter(
        (item) => item.title.toLowerCase().includes(action.payload.toLowerCase()) === true,
      );

      return { ...state, products: searchedProducts };
    }
    default:
      return state;
  }
};

export default products;
