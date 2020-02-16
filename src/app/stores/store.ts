import { combineReducers, createStore } from 'redux';

import { undoableCart, CartState } from './cart';
import { products, ProductsState } from './products';


export type StoreState = {
  cart: CartState;
  products: ProductsState;
}

const mainReducer = combineReducers({
  cart: undoableCart,
  products
})

export const store = createStore(mainReducer);