import React from 'react';
import { useProductsContext } from 'app/stores/products/products';
import { ProductsListWrapper, ProductsListSection } from 'app/ui/styles/products/products-list';
import { ProductCart } from './product-cart';

export const ProductsList = React.memo(() => (
  <ProductsListWrapper>
    <ProductsListSection>
      <Products />
    </ProductsListSection>
  </ProductsListWrapper>
));

const Products = () => {
  const products = useProductsContext();
  return (
    <>
      {products.map(product => (
        <ProductCart product={product} key={product.id} />
      ))}
    </>
  )
}
