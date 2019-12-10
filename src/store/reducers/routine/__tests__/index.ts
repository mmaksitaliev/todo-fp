import * as RoutineService from 'domain/Routine'
import {
  createRoutine,
  deleteRoutine,
  updateRoutine,
} from 'store/actions/routine'
import { routines as routineReducer, initialState } from '..'

it('Should return the initial state as no action type specified', () => {
  const action = {}
  const nextState = routineReducer(undefined, action)
  expect(nextState).toBe(initialState)
})

it('create Routine', () => {
  const routine = RoutineService.create('Learn FP', '')
  const createAction = createRoutine(routine)
  const nextState = routineReducer(undefined, createAction)
  expect(nextState).toEqual([...initialState, routine])
})

it('update Routine', () => {
  const state = [{ id: '1', title: 'Learn FP' }]

  const routine = { id: '1', title: 'Learn FP thoroughly', comment: '' }
  let updateAction = updateRoutine(routine)
  let nextState = routineReducer(state, updateAction)
  expect(nextState).toEqual([routine])

  // test for not existing id
  routine.id = '2'
  updateAction = updateRoutine(routine)
  nextState = routineReducer(state, updateAction)
  expect(nextState).toEqual(state)
})

it('remove Routine', () => {
  const state = [{ id: '1', title: 'Learn FP' }]

  let deleteAction = deleteRoutine('1')
  let nextState = routineReducer(state, deleteAction)
  expect(nextState).toEqual([])

  // test for not existing id
  deleteAction = deleteRoutine('5')
  nextState = routineReducer(state, deleteAction)
  expect(nextState).toEqual(state)
})
