import { createReducer } from 'utils'
import { create } from 'domain/RoutineService'

import {
  ROUTINE_CREATE,
  ROUTINE_UPDATE,
  ROUTINE_DELETE,
} from 'store/actions/routine'

export const initialState = [
  create('Clean out inbox'),
  create('Exercise'),
  create('Be kind', 'be kind to people'),
]

export const createRoutine = (state, { routine }) => {
  return state.concat(routine)
}

export const updateRoutine = (state, { newRoutine }) => {
  return state.map(r => {
    if (r.id === newRoutine.id) return { ...newRoutine }
    return r
  })
}

export const deleteRoutine = (state, { id }) => {
  return state.filter(r => r.id !== id)
}

const handlers = {
  [ROUTINE_CREATE]: createRoutine,
  [ROUTINE_UPDATE]: updateRoutine,
  [ROUTINE_DELETE]: deleteRoutine,
}

export const routines = createReducer(initialState, handlers)
