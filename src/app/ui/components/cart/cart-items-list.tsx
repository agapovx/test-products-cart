import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ProductCartItem } from './cart-item';

import { memoizedCartItems } from 'app/stores/cart/selectors';

import { CartItem } from 'app/stores/cart/types';

import { StoreState } from 'app/stores/store';

export const CartItemsListContainer: FC<{ items: CartItem[] }> = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((item, key) => <ProductCartItem key={item.id} id={0} count={0} />)
      ) : <EmptyCart />}
    </>
  )

}

const EmptyCart = () => <h2>Cart is empty. Add some items</h2>

const mapProductsState = (state: StoreState) => ({
  items: memoizedCartItems(state)
})

export const CartItemsList = connect(mapProductsState)(CartItemsListContainer);