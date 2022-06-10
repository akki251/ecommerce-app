import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';
import alert from './alert';
export const reducers = combineReducers({ products, cart, alert });
