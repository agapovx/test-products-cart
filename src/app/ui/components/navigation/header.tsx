import React, { memo } from 'react';
import { useCartActionsContext, useCartStateContext } from 'app/stores/cart/cart';

import { MemoizedButton } from 'app/ui/components/fragments/memoized-button';
import { Header, HeaderTitle, HeaderActions } from 'app/ui/styles/navigation/header';

export const PageHeader = memo(() => (
  <Header>
    <HeaderTitle>Products Cart</HeaderTitle>
    <HeaderActions>
      <UndoRedo />
    </HeaderActions>
  </Header>
))

export const UndoRedo = memo(() => {
  const { past, future } = useCartStateContext();
  const { undoAction, redoAction } = useCartActionsContext()!;

  return (
    <>
      <MemoizedButton aria-label={'Undo'} title={'Undo'} onClick={undoAction} disabled={past.length === 0}>
        Undo
      </MemoizedButton>

      <MemoizedButton aria-label={'Redo'} title={'Redo'} onClick={redoAction} disabled={future.length === 0}>
        Redo
      </MemoizedButton>
    </>
  )
})