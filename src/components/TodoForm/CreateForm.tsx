import React from 'react'
import { useDispatch } from 'react-redux'
import { Moment } from 'moment'
import { message, Card, Input, DatePicker, Divider } from 'antd'

import * as TodoService from 'domain/Todo'
import { createTodo } from 'store/actions/todo'
import { CloseButton, AddButton } from 'components/Buttons'
import { endOfToday, currentTime } from 'utils'
import { useStateObject } from 'hooks/form'
import { Suffix } from './Suffix'

const { TextArea } = Input

type CreateFormProps = {
  onHide: () => void
}

export function CreateForm({ onHide }: CreateFormProps) {
  const dispatch = useDispatch()

  const [todo, updateTodoProp] = useStateObject({
    title: 'default',
    comment: '',
    deadline: endOfToday(),
  })

  const onInputChange = (
    prop: keyof typeof todo,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    updateTodoProp(prop, e.target.value)
  }

  const onDeadlineChange = (deadline: Moment | null) => {
    if (deadline) updateTodoProp('deadline', deadline)
  }

  const clearTitle = () => updateTodoProp('title', '')

  const disabledDate = (date?: Moment) => currentTime().isAfter(date)

  const onSubmit = () => {
    const newTodo = TodoService.create({
      ...todo,
      deadline: todo.deadline.toISOString(),
    })
    dispatch(createTodo(newTodo))
    onHide()
    message.success('Successfully created')
  }

  return (
    <Card
      className='todo-form'
      title={'New Todo'}
      extra={<CloseButton onClick={onHide} />}
    >
      <Input
        value={todo.title}
        placeholder='Todo title'
        suffix={<Suffix clearTitle={clearTitle} title={todo.title} />}
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
        <AddButton onClick={onSubmit} />
      </div>
    </Card>
  )
}
