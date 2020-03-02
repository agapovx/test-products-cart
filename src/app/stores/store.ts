import { createStore, combineReducers, Reducer } from 'redux';
import { products, Product } from './products/products';
import { coupons, Coupon } from './coupons/coupons';
import { undoableCart, CartState } from './cart/cart';
import { UndoableState } from 'app/core/undo';

const mainReducer: Reducer<StoreState> = combineReducers<StoreState>({
  cart: undoableCart,
  coupons,
  products
});

export type StoreState = {
  cart: UndoableState<CartState>
  coupons: Coupon[]
  products: Map<number, Product>
}

export const store = createStore(mainReducer);
