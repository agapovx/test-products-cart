import { createContext, useContext } from 'react';
import couponsData from './data/coupons.json';

export type Coupon = CartCoupon | ProductCoupon;

export type CartCoupon = BaseCouponFields & { kind: 'cart' };
export type ProductCoupon = BaseCouponFields & { kind: 'product', productId: number };

type BaseCouponFields = {
  id: string;
  amount: number;
}

export const coupons = (state: Coupon[] = couponsData) => state;