import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ProductCartItem } from './cart-item';

import { memoizedCartItems } from 'app/stores/cart/selectors';
import { StoreState } from 'app/stores/store';

import { CartItemsListWrapper } from 'app/ui/styles/cart/cart-items-list';

const CartItemsListContainer: FC<{ items: number[] }> = ({ items }) => {
  return (
    <CartItemsListWrapper>
      {items.length > 0 ? (
        items.map(item => <ProductCartItem key={item} id={item} />)
      ) : <EmptyCart />}
    </CartItemsListWrapper>
  )

}

const EmptyCart = () => <h2>Cart is empty. Add some items</h2>

const mapProductsState = (state: StoreState) => ({
  items: memoizedCartItems(state)
})

/**
 * Render all cart items
 */
export const CartItemsList = connect(mapProductsState)(CartItemsListContainer);