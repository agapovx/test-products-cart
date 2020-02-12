import { UndoActions, UndoStateActions } from './types';

export type UndoableState<T> = {
  past: T[];
  present: T;
  future: T[];
};

export const makeStateUndoable = <T, P>(mainReducer: (state: T | undefined, action: P | {}) => T) => {
  const initialState = {
    past: [],
    present: mainReducer(undefined, {}),
    future: [],
  };

  return function (state = initialState, action: UndoStateActions) {
    const { past, present, future } = state;

    switch (action.type) {
      case UndoActions.UNDO:
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
      case UndoActions.REDO:
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture,
        };
      default:
        const newPresent = mainReducer(present, action);

        if (present === newPresent) {
          return state;
        }

        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
    }
  };
};
