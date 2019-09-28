export const ROUTINE_CREATE = 'ROUTINE_CREATE',
  ROUTINE_UPDATE = 'ROUTINE_UPDATE',
  ROUTINE_DELETE = 'ROUTINE_DELETE'

export const createRoutine = routine => ({
  type: ROUTINE_CREATE,
  routine,
})

export const updateRoutine = newRoutine => ({
  type: ROUTINE_UPDATE,
  newRoutine,
})

export const deleteRoutine = id => ({
  type: ROUTINE_DELETE,
  id,
})
