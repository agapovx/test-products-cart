import { createSelector } from 'reselect';
import { cartItemsSelector, countsSelector } from 'app/stores/cart/selectors';
import { memoizedProducts } from 'app/stores/products/selectors';

// tslint:disable-next-line: max-line-length
export const cartTotalAmount = createSelector(cartItemsSelector, memoizedProducts, countsSelector, (items, products, counts) => {
  const amount = items.reduce((amount, item) => {
    const productPrice = products.get(item)!.price;
    const productCount = counts[item];
    return amount += productPrice * productCount;
  }, 0)
  return amount;
})