import React, { memo, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProductCount, removeFromCart } from 'app/stores/cart/actions';
import { makeMemoizedProduct } from 'app/stores/products/selectors';

import { memoizedCount } from 'app/stores/cart/selectors';

import { Product } from 'app/stores/products/products';
import { StoreState } from 'app/stores/store';

import {
  CartItemContainer,
  CartItemCountWrapper,
  CartItemTotalInfoWrapper,
  CartItemContent,
  CartItemContentLeft,
  CartItemContentRight,
  CartItemActions
}
  from 'app/ui/styles/cart/cart-item';
import { Amount } from 'app/ui/components/fragments/amount';
import { Button } from 'app/ui/styles/fragments/button';

import { ProductInfo } from 'app/ui/components/products/product-info';
import { CartItemCount } from './cart-item-count';

type CartItemOwnProps = {
  id: number;
}

type CartItemProps = {
  product: Product;
  count: number;
  updateCount: (count: number) => void;
  remove: () => void;
}

const ProductCartItemContainer =
  memo<CartItemOwnProps & CartItemProps>(({ id, count, product, updateCount, remove }) => {

    return (
      <CartItemContainer>
        <CartItemContent>
          <CartItemContentLeft>
            <ProductInfo product={product} />
          </CartItemContentLeft>
          <CartItemContentRight>
            <CartItemActions>
              <CartItemCountWrapper>
                <span>Count: </span>
                <CartItemCount count={count} maxCount={product.storeAvailable} updateCount={updateCount} />
              </CartItemCountWrapper>

              <Button aria-label={'Delete cart item'} title={'Delete cart item'} onClick={remove}>
                Delete from cart
            </Button>
            </CartItemActions>
            <CartItemTotalInfoWrapper>
              <span>Total: </span> <Amount amount={product.price * count} />
            </CartItemTotalInfoWrapper>

          </CartItemContentRight>
        </CartItemContent>
      </CartItemContainer>
    )
  })

const makeMapCartProps = () => {
  const memoizedProduct = makeMemoizedProduct();

  const mapCartProps = (state: StoreState, ownProps: CartItemOwnProps) => ({
    product: memoizedProduct(state, ownProps.id),
    count: memoizedCount(state, ownProps.id)
  })

  return mapCartProps;
}

const mapDispatchToProps = (dispatch, ownProps: CartItemOwnProps) => ({
  updateCount: (count: number) => dispatch(updateProductCount(ownProps.id, count)),
  remove: () => dispatch(removeFromCart(ownProps.id))
})

/**
 * Render cart item
 */
export const ProductCartItem: FC<CartItemOwnProps> =
  connect(makeMapCartProps, mapDispatchToProps)(ProductCartItemContainer);