import React, { memo } from 'react';
import { Header, HeaderTitle, HeaderActions, HeaderLinks } from 'app/ui/styles/navigation/header';
import { Link } from 'app/ui/styles/fragments/link';
import { UndoRedo } from 'app/ui/components/fragments/undo-redo-actions';

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