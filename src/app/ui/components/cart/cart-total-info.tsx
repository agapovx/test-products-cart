import React, { memo, FC } from 'react';
import { connect } from 'react-redux';
import { cartTotalAmount } from 'app/model/cart-total';
import { StoreState } from 'app/stores/store';

import { Amount } from 'app/ui/components/fragments/amount';

const CartTotalInfoContainer = memo<{ totalAmount: number }>(({ totalAmount }) => {
  return (
    <div>
      Total amount: <Amount amount={totalAmount} />
    </div>
  )
});

const mapCartTotalProps = (state: StoreState) => ({
  totalAmount: cartTotalAmount(state)
})

/**
 * Render total cart amount
 */
export const CartTotalInfo = connect(mapCartTotalProps)(CartTotalInfoContainer);
