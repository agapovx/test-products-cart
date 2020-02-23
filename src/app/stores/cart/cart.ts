import { createContext, useContext } from 'react';
import { makeStateUndoable, UndoableState } from 'app/core/undo';
import { Coupon } from 'app/stores/coupons/coupons';


import { CartStateActions, CartActions, CartCtxActions } from './types';

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
    case CartActions.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, { id: action.payload, count: 1 }]
      }
    case CartActions.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  }
}

export const undoableCart = makeStateUndoable<CartState, CartStateActions>(cart, { items: [] });

export const CartActionsContex = createContext<CartCtxActions | null>(null);
export const useCartActionsContext = () => useContext(CartActionsContex);

export const CartStateContext = createContext
  <UndoableState<CartState>>({ past: [], present: { items: [] }, future: [] });
export const useCartStateContext = () => useContext(CartStateContext);