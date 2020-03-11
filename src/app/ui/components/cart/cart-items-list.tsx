import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ProductCartItem } from './cart-item';

import { memoizedCartItems } from 'app/stores/cart/selectors';

import { CartItem } from 'app/stores/cart/types';

import { StoreState } from 'app/stores/store';

import { CartItemsListWrapper } from 'app/ui/styles/cart/cart-items-list';

export const CartItemsListContainer: FC<{ items: CartItem[] }> = ({ items }) => {
  return (
    <CartItemsListWrapper>
      {items.length > 0 ? (
        items.map(item => <ProductCartItem key={item.id} id={item.id} count={item.count} />)
      ) : <EmptyCart />}
    </CartItemsListWrapper>
  )

}

const EmptyCart = () => <h2>Cart is empty. Add some items</h2>

const mapProductsState = (state: StoreState) => ({
  items: memoizedCartItems(state)
})

export const CartItemsList = connect(mapProductsState)(CartItemsListContainer);