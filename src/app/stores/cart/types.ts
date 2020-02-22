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
  payload: Product
}

type RemoveFromCartAction = {
  type: typeof CartActions.REMOVE_FROM_CART,
  payload: Product['id']
}

type UpdateProductCountAction = {
  type: typeof CartActions.UPDATE_PRODUCT_COUNT,
  payload: Product['id']
}

export type CartStateActions = AddCouponAction | RemoveCouponAction |
  AddToCartAction | RemoveFromCartAction | UpdateProductCountAction | UndoStateActions;