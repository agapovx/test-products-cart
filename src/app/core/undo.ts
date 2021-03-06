import { Action } from 'redux';
import { UndoRedoActions, UndoRedoStateActions } from './types';

export type UndoableState<T> = {
  past: T[];
  present: T;
  future: T[];
};

/**
 * Wrap any reducer and return reducer with undo/redo functionality
 * @export
 * @template T Type of the state that will wrapped into undo/redo functionality
 * @template U Type of the actions of state
 * @param mainReducer Reducer that will wrapped into undo/redo functionality
 * @param initValue Initial value to given reducer
 */
export const makeStateUndoable = <T, U extends Action>
  (mainReducer: (state: T, action) => T, initValue: T) => {
  const initialState: UndoableState<T> = {
    past: [],
    present: mainReducer(initValue, {}),
    future: [],
  };

  return function (state = initialState, action: UndoRedoStateActions | U) {
    const { past, present, future } = state;

    switch (action.type) {
      case UndoRedoActions.UNDO:
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future],
        };
      case UndoRedoActions.REDO:
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
