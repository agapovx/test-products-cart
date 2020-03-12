import { makeStateUndoable } from 'app/core/undo';
import { omitValue } from 'common/utils/omit';

import { CartStateActions, CartActions, CartState } from './types';

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
        items: [...state.items, action.payload],
        itemsInfo: Object.assign({}, state.itemsInfo, { [action.payload]: 1 })
      }
    case CartActions.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
        itemsInfo: omitValue<{ [key: number]: number }, typeof action.payload>(state.itemsInfo, action.payload)
      }
    case CartActions.UPDATE_PRODUCT_COUNT:
      return {
        ...state,
        itemsInfo: Object.assign({}, state.itemsInfo, { [action.payload.id]: action.payload.count })
      }
    default:
      return state;
  }
}

export const undoableCart = makeStateUndoable<CartState, CartStateActions>(cart, { items: [], itemsInfo: {} });
