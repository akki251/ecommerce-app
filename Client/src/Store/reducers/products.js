import {
  ADD_PRODUCT,
  FETCH_ALL,
  REMOVE_PRODUCT,
  START_LOADING,
  STOP_LOADING,
} from '../actionConstants';
const products = (state = { products: [], isLoading: false }, action) => {
  switch (action.type) {
    case FETCH_ALL: {
      return {
        ...state,
        products: action.payload,
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
      };
    
    }
    case 'UPDATE_PRODUCT': {
      state.products = [...state.products].map((prod) =>
        prod._id !== action.payload._id ? prod : action.payload,
      );
    }
    // eslint-disable-next-line
    case REMOVE_PRODUCT: {
      const _id = action.payload;
      const filteredProducts = [...state.products].filter((prod) => prod._id !== _id);
      return {
        ...state,
        products: filteredProducts,
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
    default:
      return state;
  }
};

export default products;
