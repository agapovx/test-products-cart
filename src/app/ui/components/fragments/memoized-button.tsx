import React, { memo } from 'react';
import { Button } from 'app/ui/styles/fragments/button';

export const MemoizedButton = memo<React.ButtonHTMLAttributes<HTMLButtonElement>>(({ ...props }) => {
  return <Button {...props} />
})