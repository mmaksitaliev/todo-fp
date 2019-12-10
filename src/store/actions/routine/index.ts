import { Routine } from 'domain/Routine'

export const ROUTINE_CREATE = 'ROUTINE_CREATE'
export const ROUTINE_UPDATE = 'ROUTINE_UPDATE'
export const ROUTINE_DELETE = 'ROUTINE_DELETE'

export const createRoutine = (routine: Routine) => ({
  type: ROUTINE_CREATE,
  routine,
})

export const updateRoutine = (newRoutine: Routine) => ({
  type: ROUTINE_UPDATE,
  newRoutine,
})

export const deleteRoutine = (id: string) => ({
  type: ROUTINE_DELETE,
  id,
})
