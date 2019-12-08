import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, message } from 'antd'

import { RoutineSelectForm } from 'components/RoutineSelectForm'
import { AddButton, NewButton } from 'components/Buttons'
import { TodoList } from 'components/TodoList'
import { TodoForm } from 'components/TodoForm'
import { useDoubleForm } from 'hooks/form'

import { Header } from '../Header'

export function GeneralFC(props) {
  const [
    todoFormHidden,
    onTodoFormShow,
    onTodoFormHide,
    routineFormHidden,
    onRoutineFormShow,
    onRoutineFormHide,
  ] = useDoubleForm()

  const [todo, setTodo] = useState()

  const onEditClick = todo => {
    setTodo(todo)
    onTodoFormShow()
  }

  const onRemoveClick = id => {
    props.deleteTodo(id)
    message.success('Successfully deleted')
  }

  const formProps = {
    todo,
    onHide: () => {
      onTodoFormHide()
      setTodo()
    },
  }

  const actionProps = { onTodoFormShow, onRoutineFormShow }

  return (
    <div className='content'>
      <Header title={props.title} actions={<Actions {...actionProps} />} />

      {!todoFormHidden && <TodoForm {...formProps} />}

      {!routineFormHidden && <RoutineSelectForm onHide={onRoutineFormHide} />}

      <TodoList
        todos={props.todos}
        onEditClick={onEditClick}
        onRemoveClick={onRemoveClick}
      />
    </div>
  )
}

GeneralFC.propTypes = {
  todos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const Actions = ({ onRoutineFormShow, onTodoFormShow }) => {
  return (
    <Button.Group>
      <AddButton onClick={onRoutineFormShow}>Add Routine</AddButton>
      <NewButton onClick={onTodoFormShow}>New Todo</NewButton>
    </Button.Group>
  )
}

Actions.propTypes = {
  onRoutineFormShow: PropTypes.func.isRequired,
  onTodoFormShow: PropTypes.func.isRequired,
}
