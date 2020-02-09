import * as RoutineService from 'domain/Routine'
import { routines } from 'store/reducers/routine'

it('create Routine', () => {
  const reducer = routines.caseReducers.createRoutine
  const action = routines.actions.createRoutine
  const routine = RoutineService.create('Learn FP', '')

  const nextState = reducer([], action(routine))
  expect(nextState).toEqual([routine])
})

it('update Routine', () => {
  const reducer = routines.caseReducers.updateRoutine
  const action = routines.actions.updateRoutine
  const state = [{ id: '1', title: 'Learn FP' } as RoutineService.Routine]

  const routine = { id: '1', title: 'Learn FP thoroughly', comment: '' }
  let nextState = reducer(state, action(routine))
  expect(nextState).toEqual([routine])

  // test for not existing id
  routine.id = '2'
  nextState = reducer(state, action(routine))
  expect(nextState).toEqual(state)
})

it('remove Routine', () => {
  const reducer = routines.caseReducers.deleteRoutine
  const action = routines.actions.deleteRoutine
  const state = [{ id: '1', title: 'Learn FP' } as RoutineService.Routine]

  let nextState = reducer(state, action('1'))
  expect(nextState).toEqual([])

  // test for not existing id
  nextState = reducer(state, action('5'))
  expect(nextState).toEqual(state)
})
