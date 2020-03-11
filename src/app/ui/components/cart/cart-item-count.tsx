import React, { memo } from 'react';
type CartItemCountProps = {
  count: number;
  maxCount: number;
  updateCount: (count: number) => void;
}

export const CartItemCount = memo<CartItemCountProps>(({ count, maxCount, updateCount }) => {
  const minimalCount = 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (isNaN(value)) return;

    const clampedValue = Math.max(Math.min(maxCount, value), minimalCount);
    updateCount(clampedValue);
  }

  return (
    <input
      type="number"
      aria-label={'Cart item count'}
      aria-valuemin={minimalCount}
      aria-valuenow={count}
      aria-valuemax={maxCount}
      min={minimalCount}
      value={count}
      max={maxCount}
      onChange={handleChange}
    />
  );
})