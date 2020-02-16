import { makeStateUndoable, UndoableState } from 'app/core/undo';

export type CartState = {
  items?: UndoableState<CartItem[]>;
}

export type CartItem = {
  id: number;
  count: number;
}

const cart = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const undoableCart = makeStateUndoable(cart, []);