import { Product } from 'app/stores/products/products';
import { Coupon } from 'app/stores/coupons/coupons';
import { UndoStateActions } from 'app/core/types';

export enum CartActions {
  ADD_COUPON = 'cart/addcoupon',
  REMOVE_COUPON = 'cart/removecoupon',
  ADD_TO_CART = 'cart/addtocart',
  REMOVE_FROM_CART = 'cart/removefromcart',
  UPDATE_PRODUCT_COUNT = 'cart/updateproductcount'
}

type RemoveCouponAction = {
  type: typeof CartActions.REMOVE_COUPON,
  payload: Coupon['id'];
}

type AddCouponAction = {
  type: typeof CartActions.ADD_COUPON,
  payload: Coupon['id'];
}

type AddToCartAction = {
  type: typeof CartActions.ADD_TO_CART,
  payload: Product['id']
}

type RemoveFromCartAction = {
  type: typeof CartActions.REMOVE_FROM_CART,
  payload: Product['id']
}

type UpdateProductCountAction = {
  type: typeof CartActions.UPDATE_PRODUCT_COUNT,
  payload: { id: Product['id'], count: number }
}

export type CartStateActions = AddCouponAction | RemoveCouponAction |
  AddToCartAction | RemoveFromCartAction | UpdateProductCountAction | UndoStateActions;

export type CartCtxActions = {
  removeCouponAction: (id: Coupon['id']) => void,
  addCouponAction: (id: Coupon['id']) => void,
  addToCartAction: (id: Product['id']) => void,
  removeFromCartAction: (id: Product['id']) => void,
  updateProductCountAction: (id: Product['id'], count: number) => void,
  undoAction: () => void;
  redoAction: () => void;
}