import { createReducer } from 'utils'
import { create, Routines, Routine } from 'domain/Routine'

import {
  ROUTINE_CREATE,
  ROUTINE_UPDATE,
  ROUTINE_DELETE,
} from 'store/actions/routine'

export const initialState = [
  create('Clean out inbox', ''),
  create('Exercise', ''),
  create('Be kind', 'be kind to people'),
]

type CreateAction = { routine: Routine }
type UpdateRoutine = { newRoutine: Routine }
type DeleteRoutine = { id: string }

export const createRoutine = (state: Routines, { routine }: CreateAction) => {
  return state.concat(routine)
}

export const updateRoutine = (
  state: Routines,
  { newRoutine }: UpdateRoutine,
) => {
  return state.map(routine => {
    if (routine.id === newRoutine.id) return { ...newRoutine }
    return routine
  })
}

export const deleteRoutine = (state: Routines, { id }: DeleteRoutine) => {
  return state.filter(routine => routine.id !== id)
}

const handlers = {
  [ROUTINE_CREATE]: createRoutine,
  [ROUTINE_UPDATE]: updateRoutine,
  [ROUTINE_DELETE]: deleteRoutine,
}

export const routines = createReducer(initialState, handlers)
