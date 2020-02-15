import React, { memo } from 'react';
import { UndoActions } from 'features/undo/undo-actions';

export const PageHeader = memo(() => (
  <>
    <h1>Header</h1>
    <UndoActions />
  </>
))