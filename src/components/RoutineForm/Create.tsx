import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Input, Divider, message } from 'antd'

import { CloseButton, AddButton } from 'components/Buttons'
import * as RoutineService from 'domain/Routine'
import { useStateObject } from 'hooks/form'
import { createRoutine } from 'store/actions/routine'

const { TextArea } = Input

type Props = {
  onHide: () => void
}

export function Create({ onHide }: Props) {
  const dispatch = useDispatch()

  const [newRoutine, onPropChange] = useStateObject({
    id: null,
    title: '',
    comment: '',
  })

  const onInputChange = (
    propName: keyof typeof newRoutine,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onPropChange(propName, e.target.value)
  }

  const onSubmit = () => {
    const { title, comment } = newRoutine
    const routine = RoutineService.create(title, comment)
    dispatch(createRoutine(routine))
    onHide()
    message.success('Successfully created a new Routine')
  }

  const closeBtn = <CloseButton onClick={onHide} />

  return (
    <Card className='todo-form' title={'New Routine'} extra={closeBtn}>
      <Input
        value={newRoutine.title}
        placeholder='Title'
        onChange={onInputChange.bind(null, 'title')}
      />
      <Divider>
        <span className='muted'>Details</span>
      </Divider>
      <TextArea
        value={newRoutine.comment}
        placeholder='Comment'
        autosize={{ minRows: 3 }}
        onChange={onInputChange.bind(null, 'comment')}
      />
      <div className='todo-form__submit-container'>
        <AddButton onClick={onSubmit} />
      </div>
    </Card>
  )
}
