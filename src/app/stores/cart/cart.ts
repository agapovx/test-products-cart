import { createContext, useContext } from 'react';
import { makeStateUndoable, UndoableState } from 'app/core/undo';

import { CartStateActions } from './types';

export type CartItem = {
  id: number;
  count: number;
}

const cart = (state: CartItem[] = [], action: CartStateActions) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const undoableCart = makeStateUndoable<CartItem[]>(cart, []);

export const CartActionsContex = createContext({});
export const useCartActionsContext = () => useContext(CartActionsContex);

export const CartStateContext = createContext<UndoableState<CartItem[]>>({ past: [], present: [], future: [] });
export const useCartStateContext = () => useContext(CartStateContext);