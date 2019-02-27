import { createReducer } from 'utils';
import { ROUTINE_CREATE, ROUTINE_UPDATE, ROUTINE_DELETE } from 'store/actions';
import { create } from 'domain/RoutineService';

export const initialState = [
  create('Clean out inbox'),
  create('Exercise'),
  create('Be kind'),
];

export const createRoutine = (state, { routine }) => {
  return state.concat(routine);
};

export const updateRoutine = (state, { id, newRoutine }) => {
  return state.map(r => {
    if (r.id === id) return newRoutine;
    return r;
  });
};

export const deleteRoutine = (state, { id }) => {
  return state.filter(r => r.id !== id);
};

const handlers = {
  [ROUTINE_CREATE]: createRoutine,
  [ROUTINE_UPDATE]: updateRoutine,
  [ROUTINE_DELETE]: deleteRoutine,
};

export default createReducer(initialState, handlers);
