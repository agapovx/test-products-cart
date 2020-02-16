import { Todo, TodoStateActions, TodoActions } from './types';
import { makeStateUndoable, UndoableState } from 'app/core/undo';

const todos = (state: Todo[], action: TodoStateActions): Todo[] => {
  switch (action.type) {
    case TodoActions.ADD:
      return [...state, {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      }];
    case TodoActions.DELETE:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case TodoActions.COMPLETE:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state;
  }
}

export interface TodoState {
  todos: UndoableState<Todo[]>
}


export const undoableTodos = makeStateUndoable(todos, []);