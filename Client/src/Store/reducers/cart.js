import { ADD_ITEM } from '../actionConstants';
const cart = (state = { cartItems: [], isLoading: true }, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const updatedCartItems = [...state.cartItems, action.payload];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return { cartItems: updatedCartItems };
    }

    case 'LOAD_CART_ITEMS': {
      return { cartItems: action.payload };
    }
    default:
      return state;
  }
};

export default cart;
