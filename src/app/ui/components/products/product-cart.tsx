import React, { memo, FC } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StoreState } from 'app/stores/store';
import { addToCart, removeFromCart } from 'app/stores/cart/actions';
import { isProductInCart } from 'app/stores/cart/selectors';

import { ProductInfo } from './product-info';
import { Product } from 'app/stores/products/products';

import { ProductCartWrapper } from 'app/ui/styles/products/product-cart';
import { Button } from 'app/ui/styles/fragments/button';

/**
 * Render product-item
 */
export const ProductCart = memo<{ product: Product }>(({ product }) => {
  return (
    <ProductCartWrapper>
      <ProductInfo product={product} />
      <ProductActions id={product.id} />
    </ProductCartWrapper>
  )
})

type ActionOwnProps = {
  id: number;
}

type ActionProps = {
  inCart: boolean;
  add: () => void;
  remove: () => void;
}

const ProductActionsContainer = memo<ActionOwnProps & ActionProps>(({ inCart, id, add, remove }) => {

  return inCart ? (
    <Button aria-label={'Delete from cart'} title={'Delete from cart'} onClick={remove}>
      Delete from cart
    </Button>
  ) : (
      <Button aria-label={'Add to cart'} title={'Add to cart'} onClick={add}>
        Add to cart
    </Button>
    )
});

const mapActionProps = (state: StoreState, ownProps: ActionOwnProps) => {
  return {
    inCart: isProductInCart(state, ownProps.id)
  }
}

const mapDispatchProps = (dispatch, ownProps: ActionOwnProps) => ({
  add: () => dispatch(addToCart(ownProps.id)),
  remove: () => dispatch(removeFromCart(ownProps.id))
})

const ProductActions: FC<ActionOwnProps> = connect(mapActionProps, mapDispatchProps)(ProductActionsContainer);