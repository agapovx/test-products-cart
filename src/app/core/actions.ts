import { UndoStateActions, UndoActions } from 'app/core/types';

export const undo = (): UndoStateActions => ({
  type: UndoActions.UNDO
})

export const redo = (): UndoStateActions => ({
  type: UndoActions.REDO
})