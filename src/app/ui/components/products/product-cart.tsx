import React, { memo, FC } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'app/stores/store';
import { addToCart, removeFromCart } from 'app/stores/cart/actions';
import { isProductInCart } from 'app/stores/cart/selectors';

import { ProductInfo } from './product-info';
import { Product } from 'app/stores/products/products';

import { ProductCartWrapper } from 'app/ui/styles/products/product-cart';
import { Button } from 'app/ui/styles/fragments/button';

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
  add: (id: number) => void;
  remove: (id: number) => void;
}

const ProductActionsContainer = memo<ActionOwnProps & ActionProps>(({ inCart, id, add, remove }) => {

  const removeFromCart = () => remove(id);
  const addToCart = () => add(id);

  return inCart ? (
    <Button onClick={removeFromCart}>
      Delete from cart
    </Button>
  ) : (
      <Button onClick={addToCart}>
        Add to cart
    </Button>
    )
});

const mapActionProps = (state: StoreState, ownProps: ActionOwnProps) => {
  return {
    inCart: isProductInCart(state, ownProps.id)
  }
}

const mapDispatchProps = dispatch => {
  return {
    add: (id: number) => dispatch(addToCart(id)),
    remove: (id: number) => dispatch(removeFromCart(id))
  }
}

const ProductActions: FC<ActionOwnProps> = connect(mapActionProps, mapDispatchProps)(ProductActionsContainer);