import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { create, Routines, Routine } from 'domain/Routine'

const initialState: Routines = [
  create('Clean out inbox', ''),
  create('Exercise', ''),
  create('Be kind', 'be kind to people'),
]

export const createRoutine: CaseReducer<Routines, PayloadAction<Routine>> = (
  state,
  { payload },
) => {
  return state.concat(payload)
}

export const updateRoutine: CaseReducer<Routines, PayloadAction<Routine>> = (
  state,
  { payload },
) => {
  return state.map(routine => {
    if (routine.id === payload.id) return { ...payload }
    return routine
  })
}

export const deleteRoutine: CaseReducer<Routines, PayloadAction<string>> = (
  state,
  { payload },
) => {
  return state.filter(routine => routine.id !== payload)
}

export const routines = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    createRoutine,
    updateRoutine,
    deleteRoutine,
  },
})

export const routineActions = routines.actions
