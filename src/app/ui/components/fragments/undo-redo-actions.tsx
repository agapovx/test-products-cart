import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { undo, redo } from 'app/core/actions';
import { undoAvailable, redoAvailable } from 'app/stores/cart/selectors';

import { MemoizedButton } from 'app/ui/components/fragments/memoized-button';

/**
 * Action buttons with Undo/Redo functional
 */
export const UndoRedo = memo((() => (
  <>
    <UndoAction />
    <RedoAction />
  </>
)))

const UndoAction = () => {
  const available = useSelector(undoAvailable);
  const dispatch = useDispatch();
  const action = () => dispatch(undo());
  return (
    <MemoizedButton aria-label={'Undo'} title={'Undo'} onClick={action} disabled={!available}>
      Undo
    </MemoizedButton>
  )
};

const RedoAction = () => {
  const available = useSelector(redoAvailable);
  const dispatch = useDispatch();
  const action = () => dispatch(redo());
  return (
    <MemoizedButton aria-label={'Redo'} title={'Redo'} onClick={action} disabled={!available}>
      Redo
    </MemoizedButton>
  )
};
