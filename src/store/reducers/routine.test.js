import { createRoutine, deleteRoutine, updateRoutine } from 'store/actions';
import routineReducer, { initialState } from './routine';

it('Should return the initial state as no action type specified', () => {
  const action = {};
  const nextState = routineReducer(undefined, action);
  expect(nextState).toBe(initialState);
});

it('create Routine', () => {
  const todo = { title: 'Learn FP' };
  const createAction = createRoutine(todo);
  const nextState = routineReducer(undefined, createAction);
  expect(nextState).toEqual([...initialState, todo]);
});

it('update Routine', () => {
  const state = [{ id: 1, title: 'Learn FP' }];

  const todo = { id: 1, title: 'Learn FP thoroughly' };
  let updateAction = updateRoutine(1, todo);
  let nextState = routineReducer(state, updateAction);
  expect(nextState).toEqual([todo]);

  // test for not existing id
  todo.id = 2;
  updateAction = updateRoutine(todo);
  nextState = routineReducer(state, updateAction);
  expect(nextState).toEqual(state);
});

it('remove Routine', () => {
  const state = [{ id: 1, title: 'Learn FP' }];

  let deleteAction = deleteRoutine(1);
  let nextState = routineReducer(state, deleteAction);
  expect(nextState).toEqual([]);

  // test for not existing id
  deleteAction = deleteRoutine(5);
  nextState = routineReducer(state, deleteAction);
  expect(nextState).toEqual(state);
});
