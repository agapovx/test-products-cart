import React, { memo } from 'react';
import { connect } from 'react-redux';

import { CartItemsList } from './cart-items-list';

/**
 * Cart View
 */
export const Cart = memo(() => (
  <>
    <CartItemsList />
  </>
))
