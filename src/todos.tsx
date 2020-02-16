import React from 'react';
import { connect } from 'react-redux';
import { TodoState } from 'app/stores/test-store';
import { Todo } from 'app/stores/types';
import { UndoableState } from 'app/core/history';
import { TodoActions } from 'app/stores/types';

interface TodoProps {
  todos: UndoableState<Todo[]>
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  undo: () => void;
  redo: () => void;
}

let counter = 0;

export const TodoList = (props: TodoProps) => {
  console.log('props: ', props);
  return (
    <>
      <h1>TODOS LIST</h1>
      <button onClick={() => {
        props.addTodo({
          id: counter,
          text: `dsa${counter}`,
          completed: false
        })
        counter++;
      }}>addTodo</button>
      <button onClick={() => {
        props.deleteTodo(0)
      }}>deleteTodo</button>
      <button onClick={() => {
        props.undo()
      }}>undo</button>
      <button onClick={() => {
        props.redo()
      }}>redo</button>
    </>
  )
}

const mapStateToProps = (state: TodoState) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  // выносится в файл, который будет возвращать экшены
  return {
    addTodo: (todo: Todo) => {
      dispatch({ type: TodoActions.ADD, payload: todo })
    },
    deleteTodo: (id: number) => {
      dispatch({ type: TodoActions.DELETE, payload: id })
    },
    completeTodo: (id: number) => {
      dispatch({ type: TodoActions.COMPLETE, payload: id })
    },
    undo: () => {
      dispatch({ type: 'history/undo' })
    },
    redo: () => {
      dispatch({ type: 'history/redo' })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);