export enum UndoRedoActions {
  UNDO = 'history/undo',
  REDO = 'history/redo',
}

interface UndoStateAction {
  type: typeof UndoRedoActions.UNDO
}

interface RedoStateAction {
  type: typeof UndoRedoActions.REDO
}

export type UndoRedoStateActions = UndoStateAction | RedoStateAction;