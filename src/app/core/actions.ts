import { UndoRedoStateActions, UndoRedoActions } from 'app/core/types';

export const undo = (): UndoRedoStateActions => ({
  type: UndoRedoActions.UNDO
})

export const redo = (): UndoRedoStateActions => ({
  type: UndoRedoActions.REDO
})