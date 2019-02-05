import {
  TODO_CREATE,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE_COMPLETE,
} from "store/actions";
import { curry, equalBy, createReducer, fromNow } from "utils";
import * as TodoService from "domain/TodoService";

const equalById = curry(equalBy)("id");

export const intialState = [
  TodoService.create("Learn JS", null, fromNow(10)),
  TodoService.create("Learn FP", null, fromNow(20)),
  TodoService.create("Learn React", null, fromNow(30)),
  TodoService.create("Build Todo App", null, fromNow(0)),
  TodoService.create("Have fun", null, fromNow(0), null, true),
];

function createTodo(todos, { todo }) {
  return todos.concat([todo]);
}

function toggleComplete(todos, { id }) {
  return todos.map(todo => {
    if (todo.id === id) todo.completed = !todo.completed;
    return todo;
  });
}

function updateTodo(todos, { todo: toUpdate }) {
  const newTodos = todos.slice();
  const index = newTodos.findIndex(equalById(toUpdate.id));
  if (index !== -1) newTodos[index] = toUpdate;
  return newTodos;
}

function deleteTodo(todos, { id }) {
  return todos.filter(todo => todo.id !== id);
}

const handlers = {
  [TODO_CREATE]: createTodo,
  [TODO_UPDATE]: updateTodo,
  [TODO_DELETE]: deleteTodo,
  [TODO_TOGGLE_COMPLETE]: toggleComplete,
};

export default createReducer(intialState, handlers);
