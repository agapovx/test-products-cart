import { CartActions, CartStateActions } from './types';
import { Product } from 'app/stores/products/products';
import { Coupon } from 'app/stores/coupons/coupons';

export const removeCoupon = (id: Coupon['id']): CartStateActions => ({
  type: CartActions.REMOVE_COUPON,
  payload: id
})

export const addCoupon = (id: Coupon['id']): CartStateActions => ({
  type: CartActions.ADD_COUPON,
  payload: id
})

export const addToCart = (id: Product['id']): CartStateActions => ({
  type: CartActions.ADD_TO_CART,
  payload: id
})

export const removeFromCart = (id: Product['id']): CartStateActions => ({
  type: CartActions.REMOVE_FROM_CART,
  payload: id
})

export const updateProductCount = (id: Product['id'], count: number): CartStateActions => ({
  type: CartActions.UPDATE_PRODUCT_COUNT,
  payload: {
    id, count
  }
})
