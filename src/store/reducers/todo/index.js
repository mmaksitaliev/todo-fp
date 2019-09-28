import {
  TODO_CREATE,
  TODO_CREATE_BATCH,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE_COMPLETE,
} from '../../actions/todo';
import { createReducer, fromNow } from 'utils';
import * as TodoService from 'domain/TodoService';

export const initialState = [
  TodoService.create('Have fun [YESTERDAY]', null, fromNow(-2), null, true),
  TodoService.create('Learn JS', null, fromNow(10)),
  TodoService.create('Learn FP', null, fromNow(20)),
  TodoService.create('Learn React', null, fromNow(30)),
  TodoService.create('Build Todo App', null, fromNow(0)),
  TodoService.create('Have fun', null, fromNow(0), null, true),
];

function createTodo(todos, { todo }) {
  return todos.concat([todo]);
}

function createTodos(todos, { newTodos }) {
  return todos.concat(newTodos);
}

function toggleComplete(todos, { id }) {
  return todos.map(todo => {
    if (todo.id === id) todo.completed = !todo.completed;
    return todo;
  });
}

function updateTodo(todos, { todo: toUpdate }) {
  return todos.map(todo => {
    if (todo.id === toUpdate.id) return toUpdate;
    return todo;
  });
}

function deleteTodo(todos, { id }) {
  return todos.filter(todo => todo.id !== id);
}

const handlers = {
  [TODO_CREATE]: createTodo,
  [TODO_CREATE_BATCH]: createTodos,
  [TODO_UPDATE]: updateTodo,
  [TODO_DELETE]: deleteTodo,
  [TODO_TOGGLE_COMPLETE]: toggleComplete,
};

export default createReducer(initialState, handlers);
