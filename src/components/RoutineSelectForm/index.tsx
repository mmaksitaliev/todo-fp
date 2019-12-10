import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'store'
import { createTodos } from 'store/actions/todo'
import { Todos } from 'domain/Todo'
import { RoutineSelectFormFC } from './RoutineSelectForm'

type RoutineSelectFormProps = {
  onHide: () => void
}

export const RoutineSelectForm = (props: RoutineSelectFormProps) => {
  const routines = useSelector(({ routines }: RootState) => routines)
  const dispatch = useDispatch()
  return (
    <RoutineSelectFormFC
      routines={routines}
      createTodos={(todos: Todos) => dispatch(createTodos(todos))}
      {...props}
    />
  )
}
