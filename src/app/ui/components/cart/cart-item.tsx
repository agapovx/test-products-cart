import React, { memo, FC } from 'react';
import { connect } from 'react-redux';
import { makeMemoizedProduct } from 'app/stores/products/selectors';

import { Product } from 'app/stores/products/products';
import { StoreState } from 'app/stores/store';

type CartItemOwnProps = {
  id: number;
  count: number;
}

type CartItemProps = {
  product: Product;
}

const ProductCartItemContainer = memo<CartItemOwnProps & CartItemProps>(({ id, count, product }) => {
  return (
    <>
      {product.name}
    </>
  )
})

const makeMapCartProps = () => {
  const memoizedProducts = makeMemoizedProduct();
  console.log('makemapcart props');

  const mapCartProps = (state: StoreState, ownProps: CartItemOwnProps) => ({
    product: memoizedProducts(state, ownProps.id)
  })

  return mapCartProps;
}

export const ProductCartItem: FC<CartItemOwnProps> = connect(makeMapCartProps)(ProductCartItemContainer);