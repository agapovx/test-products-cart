import React, { memo } from 'react';
import { CartTotalInfo } from './cart-total-info';

import { CartItemsList } from './cart-items-list';

/**
 * Cart View
 */
export const Cart = memo(() => (
  <>
    <CartItemsList />
    <CartTotalInfo />
  </>
))
