import React from 'react';
import { useProductsContext } from 'app/stores/products/products';
import { useCartStateContext } from 'app/stores/cart/cart';

export const ProductsList = React.memo(() => (
  <>
    <header>
      <h1>List of Products</h1>
    </header>
    <section>
      <Products />
    </section>
  </>
));

const Products = () => {
  const products = useProductsContext();
  const cart = useCartStateContext();
  console.log('products: ', products);
  console.log('cart: ', cart);
  return (
    <h1>Products list</h1>
  )
}
