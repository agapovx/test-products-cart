import React, { memo, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProductCount } from 'app/stores/cart/actions';
import { makeMemoizedProduct } from 'app/stores/products/selectors';

import { Product } from 'app/stores/products/products';
import { StoreState } from 'app/stores/store';

import { CartItemContainer, CartItemContent, CartItemContentLeft, CartItemContentRight, CartItemActions } from 'app/ui/styles/cart/cart-item';

import { ProductInfo } from 'app/ui/components/products/product-info';
import { CartItemCount } from './cart-item-count';

type CartItemOwnProps = {
  id: number;
  count: number;
}

type CartItemProps = {
  product: Product;
  updateCount: (id: number, count: number) => void;
}

const ProductCartItemContainer = memo<CartItemOwnProps & CartItemProps>(({ id, count, product, updateCount }) => {
  const updateProductCount = (count: number) => updateCount(id, count);

  console.log('rerender product with id: ', id);

  return (
    <CartItemContainer>
      <CartItemContent>
        <CartItemContentLeft>
          <ProductInfo product={product} />
        </CartItemContentLeft>
        <CartItemContentRight>
          <CartItemActions>
            <CartItemCount count={count} maxCount={product.storeAvailable} updateCount={updateProductCount} />
            <div>dELETE</div>
          </CartItemActions>
          <div>
            total info will be here
          </div>

        </CartItemContentRight>
      </CartItemContent>
    </CartItemContainer>
  )
})

const makeMapCartProps = () => {
  const memoizedProducts = makeMemoizedProduct();

  const mapCartProps = (state: StoreState, ownProps: CartItemOwnProps) => ({
    product: memoizedProducts(state, ownProps.id)
  })

  return mapCartProps;
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCount: updateProductCount
}, dispatch)

export const ProductCartItem: FC<CartItemOwnProps> =
  connect(makeMapCartProps, mapDispatchToProps)(ProductCartItemContainer);