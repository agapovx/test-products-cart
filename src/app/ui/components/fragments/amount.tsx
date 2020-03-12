import React, { memo } from 'react';

/**
 * Display amount value with currency
 */
export const Amount = memo<{ amount: number }>(({ amount }) => (
  <span>{formatter.format(amount)}</span>
));

const formatter = new Intl.NumberFormat('ru-RU', {
  currency: 'RUB',
  style: 'currency',
  currencyDisplay: 'symbol',
});
