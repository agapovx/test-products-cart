export enum UndoActions {
  UNDO = 'history/undo',
  REDO = 'history/redo',
}

interface UndoStateAction {
  type: typeof UndoActions.UNDO
}

interface RedoStateAction {
  type: typeof UndoActions.REDO
}

export type UndoStateActions = UndoStateAction | RedoStateAction;