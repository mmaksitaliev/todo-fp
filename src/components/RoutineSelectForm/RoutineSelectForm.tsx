import React, { useState } from 'react'
import { Card, List, Checkbox, message } from 'antd'

import { Routines } from 'domain/Routine'
import { createFromRoutine, Todos } from 'domain/Todo'
import { AddButton, CloseButton } from 'components/Buttons'
import { Header } from 'components/ListItemHeader'

type Props = {
  routines: Routines
  createTodos: (todos: Todos) => void
  onHide: () => void
}

export function RoutineSelectFormFC({
  routines: stateRoutines,
  createTodos,
  onHide,
}: Props) {
  const initRoutines = stateRoutines.map(r => ({ ...r, checked: false }))
  const [routines, setRoutines] = useState(initRoutines)

  const onChange = (id: string) => {
    const newRoutines = routines.map(r => {
      if (r.id === id) {
        return { ...r, checked: !r.checked }
      }
      return r
    })

    setRoutines(newRoutines)
  }

  const onSubmit = () => {
    const newTodos = routines.filter(r => r.checked).map(createFromRoutine)
    createTodos(newTodos)
    onHide()
    message.success('Successfully updated')
  }

  return (
    <Card title='Add from routines' extra={<CloseButton onClick={onHide} />}>
      <List
        className='todo__list'
        itemLayout='horizontal'
        dataSource={routines}
        renderItem={({ id, comment, title, checked }) => (
          <List.Item
            actions={[
              <Checkbox
                key={id}
                checked={checked}
                onChange={() => onChange(id)}
              />,
            ]}
          >
            <List.Item.Meta
              title={<Header title={title} />}
              description={comment}
            />
          </List.Item>
        )}
      />
      <div className='todo-form__submit-container'>
        <AddButton onClick={onSubmit} />
      </div>
    </Card>
  )
}
