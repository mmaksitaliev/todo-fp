import { useState } from 'react'

export const useDoubleForm = () => {
  const [
    todoFormHidden,
    setTodoFormShown,
    setTodoFormHidden,
  ] = useFormVisibility()

  const [
    routineFormHidden,
    setRoutineFormShown,
    setRoutineFormHidden,
  ] = useFormVisibility()

  const onTodoFormShow = () => {
    setTodoFormShown()
    setRoutineFormHidden()
  }

  const onRoutineFormShow = () => {
    setRoutineFormShown()
    setTodoFormHidden()
  }

  return [
    todoFormHidden,
    onTodoFormShow,
    setTodoFormHidden,
    routineFormHidden,
    onRoutineFormShow,
    setRoutineFormHidden,
  ]
}

export const useFormVisibility = (isHidden = true) => {
  const [hidden, setHidden] = useState(isHidden)

  const onFormShow = () => setHidden(false)
  const onFormHide = () => setHidden(true)

  return [hidden, onFormShow, onFormHide] as const
}

export const useStateObject = <T extends object>(defaultState: T = {} as T) => {
  const [state, setState] = useState(defaultState)

  const setValue = (prop: keyof T, value: T[keyof T]) => {
    const newState = { ...state, [prop]: value }
    setState(newState)
  }

  return [state, setValue, setState] as const
}
