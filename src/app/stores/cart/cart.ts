import { createContext, useContext } from 'react';
import { makeStateUndoable, UndoableState } from 'app/core/undo';
import { Coupon } from 'app/stores/coupons/coupons';

import { CartStateActions } from './types';

export type CartItem = {
  id: number;
  count: number;
}

export type CartState = {
  items: CartItem[];
  coupon?: Coupon['id'];
}

const cart = (state: CartState, action: CartStateActions) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const undoableCart = makeStateUndoable<CartState, CartStateActions>(cart, { items: [] });

export const CartActionsContex = createContext({});
export const useCartActionsContext = () => useContext(CartActionsContex);

export const CartStateContext = createContext
  <UndoableState<CartItem[]>>({ past: [], present: [], future: [] });
export const useCartStateContext = () => useContext(CartStateContext);