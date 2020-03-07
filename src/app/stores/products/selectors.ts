import { createSelector } from 'reselect';
import { StoreState } from 'app/stores/store';

const productsSelector = (state: StoreState) => state.products;
const productIdSelector = (_, id: number) => id;

export const memoizedProducts = createSelector(productsSelector, products => products);

export const makeMemoizedProduct = () =>
  createSelector([productsSelector, productIdSelector], (products, id) => {
    console.log('getting product: ');
    return products.get(id)!;
  })

