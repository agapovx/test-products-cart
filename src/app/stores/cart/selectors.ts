import { createSelector } from 'reselect';
import { StoreState } from 'app/stores/store';

import { memoizedProducts } from 'app/stores/products/selectors';

export const isProductInCart = (state: StoreState, id: number): boolean => {
  return state.cart.present.items.includes(id)
}

const countSelector = (state: StoreState, id: number) => state.cart.present.itemsInfo[id]!;

export const undoAvailable = (state: StoreState): boolean => state.cart.past.length > 0
export const redoAvailable = (state: StoreState): boolean => state.cart.future.length > 0

export const cartItemsSelector = (state: StoreState) => state.cart.present.items;
const cartCouponSelector = (state: StoreState) => state.cart.present.coupon;

export const countsSelector = (state: StoreState) => state.cart.present.itemsInfo;
export const memoizedCartItems = createSelector(cartItemsSelector, items => items);
export const memoizedCount = createSelector(countSelector, count => count);
