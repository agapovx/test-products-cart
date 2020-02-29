import { createContext, useContext } from 'react';
import { makeStateUndoable, UndoableState } from 'app/core/undo';
import { Coupon } from 'app/stores/coupons/coupons';

import { CartStateActions, CartActions } from './types';
import { Product } from '../products/products';

export type CartItem = {
  id: Product['id'];
  count: number;
}

export type CartState = {
  items: CartItem[];
  coupon?: Coupon['id'];
}

const cart = (state: CartState, action: CartStateActions) => {
  switch (action.type) {
    case CartActions.ADD_COUPON:
      return {
        ...state,
        coupon: action.payload
      }
    case CartActions.REMOVE_COUPON:
      return {
        ...state,
        coupon: undefined
      }
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
    case CartActions.UPDATE_PRODUCT_COUNT:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              id: item.id,
              count: action.payload.count
            }
          }
          return item;
        })
      }
    default:
      return state;
  }
}

export const undoableCart = makeStateUndoable<CartState, CartStateActions>(cart, { items: [] });
