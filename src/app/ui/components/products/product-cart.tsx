import React, { memo } from 'react';
import { Product } from 'app/stores/products/products';
import { useCartStateContext, useCartActionsContext } from 'app/stores/cart/cart';

import { ProductInfo } from './product-info';

import { ProductCartWrapper } from 'app/ui/styles/products/product-cart';
import { Button } from 'app/ui/styles/fragments/button';

export const ProductCart = memo<{ product: Product }>(({ product }) => {
  return (
    <ProductCartWrapper>
      <ProductInfo product={product} />
      <ProductActions product={product} />
    </ProductCartWrapper>
  )
})

const ProductActions = memo<{ product: Product }>(({ product }) => {
  const { present } = useCartStateContext();
  const { removeFromCartAction, addToCartAction } = useCartActionsContext()!;
  const productInCart = present.items.filter(current => current.product.id === product.id);

  const removeFromCart = () => removeFromCartAction(product.id);
  const addToCart = () => addToCartAction(product);

  return !!productInCart.length ? (
    <Button onClick={removeFromCart}>
      Delete from cart
    </Button>
  ) : (
      <Button onClick={addToCart}>
        Add to cart
    </Button>
    )
});