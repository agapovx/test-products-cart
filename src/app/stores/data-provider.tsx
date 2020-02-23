import React, { useReducer, useMemo } from 'react';
import { ProductsContext, Product } from './products/products';
import { CouponsContext, Coupon } from './coupons/coupons';
import { CartStateContext, undoableCart, CartActionsContex } from './cart/cart';
import { removeCoupon, addCoupon, addToCart, removeFromCart, updateProductCunt } from './cart/actions';

import productsData from './products/data/products.json';
import couponsData from './coupons/data/coupons.json';

export const ProductsCouponsCtxProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={productsData}>
      <CouponsContext.Provider value={couponsData}>
        {children}
      </CouponsContext.Provider>
    </ProductsContext.Provider>
  )
}

export const CartCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(undoableCart, { past: [], present: { items: [] }, future: [] });

  const removeCouponAction = (id: Coupon['id']) => dispatch(removeCoupon(id))
  const addCouponAction = (id: Coupon['id']) => dispatch(addCoupon(id))
  const addToCartAction = (product: Product) => dispatch(addToCart(product))
  const removeFromCartAction = (id: Product['id']) => dispatch(removeFromCart(id))
  const updateProductCountAction = (id: Product['id']) => dispatch(updateProductCunt(id))

  const actions = useMemo(() => ({
    removeCouponAction,
    addCouponAction,
    addToCartAction,
    removeFromCartAction,
    updateProductCountAction
  }), [])

  return (
    <CartStateContext.Provider value={state}>
      <CartActionsContex.Provider value={actions}>
        {children}
      </CartActionsContex.Provider>
    </CartStateContext.Provider>
  )

}