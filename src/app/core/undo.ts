import { Action } from 'redux';
import { UndoActions, UndoStateActions } from './types';

export type UndoableState<T> = {
  past: T[];
  present: T;
  future: T[];
};



export const makeStateUndoable = <T, U extends Action>
  (mainReducer: (state: T, action) => T, initValue: T) => {
  const initialState: UndoableState<T> = {
    past: [],
    present: mainReducer(initValue, {}),
    future: [],
  };

  return function (state = initialState, action: UndoStateActions | U) {
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
