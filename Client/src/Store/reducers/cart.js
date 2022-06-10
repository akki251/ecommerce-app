import { ADD_ITEM } from '../actionConstants';
const cart = (state = { cartItems: [], isLoading: true }, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      //  1. check if exists  already
      const ifAlreadyExistsIndex = state.cartItems?.findIndex(
        (item) => item._id === action.payload._id,
      );

      // 2 if not create two prop curCnt , curPrice
      let newlyAddItem = null;
      if (ifAlreadyExistsIndex === -1) {
        newlyAddItem = {
          ...action.payload,
          currentCount: 1,
        };
        state.cartItems = [...state.cartItems, newlyAddItem];
      } else {
        // 3 if yes, increase curCnt
        newlyAddItem = {
          ...action.payload,
          currentCount: state.cartItems[ifAlreadyExistsIndex].currentCount + 1,
        };
        state.cartItems[ifAlreadyExistsIndex] = newlyAddItem;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

      return { cartItems: state.cartItems };
    }

    case 'INCREMENT_ITEM': {
      const incrementItemIndex = state.cartItems?.findIndex((item) => item._id === action.payload);

      state.cartItems[incrementItemIndex].currentCount += 1;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

      return { cartItems: state.cartItems };
    }
    case 'DECREMENT_ITEM': {
      const decrementItemIndex = state.cartItems?.findIndex((item) => item._id === action.payload);

      state.cartItems[decrementItemIndex].currentCount -= 1;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

      return { cartItems: state.cartItems };
    }
    case 'REMOVE_ITEM': {
      const updatedCartItems = [...state.cartItems].filter((item) => item._id !== action.payload);

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      return { cartItems: updatedCartItems };
    }

    case 'LOAD_CART_ITEMS': {
      const cartItemsFromLocal = JSON.parse(localStorage.getItem('cartItems'));
      return { cartItems: cartItemsFromLocal, isLoading: false };
    }
    default:
      return state;
  }
};

export default cart;
