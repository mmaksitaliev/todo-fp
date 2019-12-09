import React from 'react'
import { useDispatch } from 'react-redux'
import moment, { Moment } from 'moment'
import { message, Card, Input, DatePicker, Divider } from 'antd'

import * as TodoService from 'domain/Todo'
import { updateTodo } from 'store/actions/todo'
import { useStateObject } from 'hooks/form'
import { currentTime } from 'utils'
import { CloseButton, UpdateButton } from 'components/Buttons'
import { Suffix } from './Suffix'

const { TextArea } = Input

type UpdateFormProps = {
  todo: TodoService.Todo
  onHide: () => void
}

export function UpdateForm({ todo: toEdit, onHide }: UpdateFormProps) {
  const dispatch = useDispatch()

  const [todo, updateTodoProp] = useStateObject({
    ...toEdit,
    deadline: moment(toEdit.deadline),
  })

  const clearTitle = () => updateTodoProp('title', '')

  const onInputChange = (
    prop: keyof typeof todo,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    updateTodoProp(prop, e.target.value)
  }

  const onDeadlineChange = (deadline: Moment | null) => {
    if (deadline) updateTodoProp('deadline', deadline)
  }

  const disabledDate = (date?: Moment) => currentTime().isAfter(date)

  const onSubmit = () => {
    const toUpdate = {
      ...todo,
      deadline: todo.deadline.toString(),
    }
    const updated = TodoService.update(toUpdate.id, toUpdate)
    dispatch(updateTodo(updated))
    onHide()
    message.success('Successfully updated')
  }

  return (
    <Card
      className='todo-form'
      title={'Updat Todo'}
      extra={<CloseButton onClick={onHide} />}
    >
      <Input
        value={todo.title}
        placeholder='Todo title'
        suffix={<Suffix title={todo.title} clearTitle={clearTitle} />}
        onChange={onInputChange.bind(null, 'title')}
      />
      <Divider>
        <span className='muted'>Details</span>
      </Divider>
      <TextArea
        value={todo.comment}
        placeholder='Todo comment'
        autosize={{ minRows: 3 }}
        onChange={onInputChange.bind(null, 'comment')}
      />

      <DatePicker
        disabledDate={disabledDate}
        onChange={onDeadlineChange}
        onOk={onDeadlineChange}
        value={todo.deadline}
        placeholder='Select Time'
        className='mt-2'
      />
      <div className='todo-form__submit-container'>
        <UpdateButton onClick={onSubmit} />
      </div>
    </Card>
  )
}
