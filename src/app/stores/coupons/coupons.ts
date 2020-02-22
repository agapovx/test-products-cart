import { createContext, useContext } from 'react';


export type Coupon = CartCoupon | ProductCoupon;

export type CartCoupon = BaseCouponFields & { kind: 'cart' };
export type ProductCoupon = BaseCouponFields & { kind: 'product', productId: number };

type BaseCouponFields = {
  id: string;
  amount: number;
}

export const CouponsContext = createContext<Coupon[]>([]);
export const useCouponContext = () => useContext(CouponsContext);