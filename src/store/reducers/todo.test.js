import todoReducer, { intialState } from "./todo";
import { createTodo, deleteTodo, updateTodo } from "store/actions";

it("Should return the initial state as no action type specified", () => {
  const action = {};
  const nextState = todoReducer(undefined, action);
  expect(nextState).toBe(intialState);
});

it("create TODO", () => {
  const todo = { goal: "Learn FP" };
  const createAction = createTodo(todo);
  const nextState = todoReducer(undefined, createAction);
  expect(nextState).toEqual([...intialState, todo]);
});

it("update TODO", () => {
  const state = [{ id: 1, goal: "Learn FP" }];

  let todo = { id: 1, goal: "Learn FP thoroughly" };
  let updateAction = updateTodo(todo);
  let nextState = todoReducer(state, updateAction);
  expect(nextState).toEqual([todo]);

  // test for not existing id
  todo.id = 2;
  updateAction = updateTodo(todo);
  nextState = todoReducer(state, updateAction);
  expect(nextState).toEqual(state);
});

it("remove TODO", () => {
  const state = [{ id: 1, goal: "Learn FP" }];

  let deleteAction = deleteTodo(1);
  let nextState = todoReducer(state, deleteAction);
  expect(nextState).toEqual([]);

  // test for not existing id
  deleteAction = deleteTodo(5);
  nextState = todoReducer(state, deleteAction);
  expect(nextState).toEqual(state);
});
