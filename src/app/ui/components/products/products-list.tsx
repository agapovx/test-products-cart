import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Product } from 'app/stores/products/products'
import { StoreState } from 'app/stores/store';

import { ProductCart } from './product-cart';

import { ProductsListWrapper, ProductsListSection } from 'app/ui/styles/products/products-list';

export const ProductsList = React.memo(() => (
  <ProductsListWrapper>
    <ProductsListSection>
      <Products />
    </ProductsListSection>
  </ProductsListWrapper>
));

const ProductsContainer: FC<{ products: Map<number, Product> }> = ({ products }) => {
  return (
    <>
      {Array.from(products.values()).map(product => (
        <ProductCart product={product} key={product.id} />
      ))};
    </>
  )
}

const mapProductsState = (state: StoreState) => ({
  products: state.products
})

const Products = connect(mapProductsState)(ProductsContainer);
