import React, { memo } from 'react';
import { connect } from 'react-redux';

import { CartItemsList } from './cart-items-list';

export const Cart = memo(() => (
  <>
    <CartItemsList />
  </>
))
