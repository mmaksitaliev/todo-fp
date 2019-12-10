import React, { ChangeEvent } from 'react'
import { Card, Input, Divider, message } from 'antd'

import { updateRoutine } from 'store/actions/routine'
import * as RoutineService from 'domain/Routine'
import { useStateObject } from 'hooks/form'
import { CloseButton, UpdateButton } from 'components/Buttons'

const { TextArea } = Input

type Props = {
  routine: RoutineService.Routine
  onHide: () => void
}

export function Update({ routine, onHide }: Props) {
  const [newRoutine, onPropChange] = useStateObject({ ...routine })

  const onInputChange = (
    propName: keyof typeof newRoutine,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onPropChange(propName, e.target.value)
  }

  const onSubmit = () => {
    const { id, title, comment } = newRoutine
    const routine = RoutineService.update(id, title, comment)
    updateRoutine(routine)
    onHide()
    message.success('Successfully created a new Routine')
  }

  const closeBtn = <CloseButton onClick={onHide} />

  return (
    <Card className='todo-form' title={'Update Routine'} extra={closeBtn}>
      <Input
        value={newRoutine.title}
        placeholder='Todo title'
        onChange={onInputChange.bind(null, 'title')}
      />
      <Divider>
        <span className='muted'>Details</span>
      </Divider>
      <TextArea
        value={newRoutine.comment}
        placeholder='Todo comment'
        autosize={{ minRows: 3 }}
        onChange={onInputChange.bind(null, 'comment')}
      />
      <div className='todo-form__submit-container'>
        <UpdateButton onClick={onSubmit} />
      </div>
    </Card>
  )
}
