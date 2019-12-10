import * as at from '..'
import { create } from 'domain/Routine'

it('test routine action creators', () => {
  const routine = create('', '')
  const actionCreate = at.createRoutine(routine)
  const actionUpdate = at.updateRoutine(routine)
  const actionDelete = at.deleteRoutine('5')

  expect(actionCreate).toEqual({ type: at.ROUTINE_CREATE, routine })
  expect(actionUpdate).toEqual({
    type: at.ROUTINE_UPDATE,
    newRoutine: routine,
  })
  expect(actionDelete).toEqual({ type: at.ROUTINE_DELETE, id: '5' })
})
