import React, { memo, FC } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'app/stores/store';
import { undo, redo } from 'app/core/actions';
import { undoAvaliable, redoAvaliable } from 'app/stores/cart/selectors';

import { MemoizedButton } from 'app/ui/components/fragments/memoized-button';
import { Header, HeaderTitle, HeaderActions, HeaderLinks } from 'app/ui/styles/navigation/header';
import { Link } from 'app/ui/styles/fragments/link';

export const PageHeader = memo(() => (
  <Header>
    <HeaderTitle>Products Cart</HeaderTitle>
    <HeaderLinks>
      <Link to="/">Products List</Link>
      <Link to="/cart">Cart</Link>
    </HeaderLinks>
    <HeaderActions>
      <UndoRedo />
    </HeaderActions>
  </Header>
))

type UndoProps = {
  undoCart: () => void;
  redoCart: () => void;
  isUndoAvaliable: boolean;
  isRedoAvailable: boolean;
}

const UndoRedoContainer = memo<UndoProps>(({ undoCart, redoCart, isUndoAvaliable, isRedoAvailable }) => {

  return (
    <>
      <MemoizedButton aria-label={'Undo'} title={'Undo'} onClick={undoCart} disabled={!isUndoAvaliable}>
        Undo
      </MemoizedButton>

      <MemoizedButton aria-label={'Redo'} title={'Redo'} onClick={redoCart} disabled={!isRedoAvailable}>
        Redo
      </MemoizedButton>
    </>
  )
})

const mapUndoRedoProps = (state: StoreState) => {
  return {
    isUndoAvaliable: undoAvaliable(state),
    isRedoAvailable: redoAvaliable(state)
  }
}

const mapDispatchProps = dispatch => {
  return {
    undoCart: () => dispatch(undo()),
    redoCart: () => dispatch(redo())
  }
}

const UndoRedo: FC = connect(mapUndoRedoProps, mapDispatchProps)(UndoRedoContainer);
