import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, message } from 'antd'

import { RoutineSelectForm } from 'components/RoutineSelectForm'
import { AddButton, NewButton } from 'components/Buttons'
import { TodoList } from 'components/TodoList'
import { TodoForm } from 'components/TodoForm'
import { useDoubleForm } from 'hooks/form'
import { usePageTodos } from 'hooks/usePageTodos'
import { todoActions } from 'store/reducers/todo'
import { Todo } from 'domain/Todo'

import { Header } from '../Header'

export function Todos() {
  const dispatch = useDispatch()
  const { todos, title } = usePageTodos()

  const [
    todoFormHidden,
    onTodoFormShow,
    onTodoFormHide,
    routineFormHidden,
    onRoutineFormShow,
    onRoutineFormHide,
  ] = useDoubleForm()

  const [todo, setTodo] = useState()

  const onEditClick = (todo: Todo) => {
    setTodo(todo)
    onTodoFormShow()
  }

  const toggleCompleteClick = (id: string) =>
    dispatch(todoActions.toggleComplete(id))

  const onRemoveClick = (id: string) => {
    dispatch(todoActions.deleteTodo(id))
    message.success('Successfully deleted')
  }

  const formProps = {
    todo,
    onHide: () => {
      onTodoFormHide()
      setTodo({})
    },
  }

  return (
    <div className='content'>
      <Header title={title}>
        <Actions
          onCreateTodoClick={onTodoFormShow}
          onCreateRoutineClick={onRoutineFormShow}
        />
      </Header>

      {!todoFormHidden && <TodoForm {...formProps} />}

      {!routineFormHidden && <RoutineSelectForm onHide={onRoutineFormHide} />}

      <TodoList
        // eslint-disable-next-line
        // @ts-ignore
        todos={todos}
        toggleComplete={toggleCompleteClick}
        onEditClick={onEditClick}
        onRemoveClick={onRemoveClick}
      />
    </div>
  )
}

type ActionsProps = {
  onCreateTodoClick: () => void
  onCreateRoutineClick: () => void
}

const Actions = ({ onCreateTodoClick, onCreateRoutineClick }: ActionsProps) => {
  return (
    <Button.Group>
      <AddButton onClick={onCreateRoutineClick}>Add Routine</AddButton>
      <NewButton onClick={onCreateTodoClick}>New Todo</NewButton>
    </Button.Group>
  )
}
