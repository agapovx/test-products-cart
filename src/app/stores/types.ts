export enum TodoActions {
  ADD = 'todo/add',
  DELETE = 'todo/delete',
  COMPLETE = 'todo/complete'
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface AddTodoAction {
  type: typeof TodoActions.ADD;
  payload: Todo
}

interface DeleteTodoAction {
  type: typeof TodoActions.DELETE;
  payload: number;
}

interface CompleteTodoAction {
  type: typeof TodoActions.COMPLETE;
  payload: number;
}

export type TodoStateActions = AddTodoAction | DeleteTodoAction | CompleteTodoAction;