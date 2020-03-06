import { StoreState } from 'app/stores/store';

export const isProductInCart = (state: StoreState, id: number): boolean => {
  return !!state.cart.present.items.filter(item => item.id === id).length;
}

export const undoAvailable = (state: StoreState) => state.cart.past.length > 0
export const redoAvailable = (state: StoreState) => state.cart.future.length > 0