import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Input, DatePicker, Divider, Icon, message } from 'antd';
import moment from 'moment';

import * as TodoService from 'domain/TodoService';
import { AddButton, UpdateButton, CloseButton } from 'components/Buttons';
import { currentTime as getCurrentTime, endOfToday } from 'utils';
import { useStateObject } from 'hooks/form';

const { TextArea } = Input;

export default function Form({
  todo,
  updateTodo,
  createTodo,
  onHide,
}) {
  const currentTime = getCurrentTime();
  const [tempTodo, onPropChange, setTodo] = useStateObject({
    title: 'default',
    comment: '',
    deadline: endOfToday(),
  });
  const [updateAction, setUpdateAction] = useState(false);

  useEffect(() => {
    if (todo && todo.id) {
      const deadline = todo.deadline ? moment(todo.deadline) : null;
      setTodo({ ...todo, deadline });
      setUpdateAction(true);
    }
  }, [todo, setTodo]);

  const clearTitle = () => onPropChange('title', '');

  const onInputChange = (prop, e) => {
    onPropChange(prop, e.target.value);
  };

  const onDeadlineChange = deadline => {
    onPropChange('deadline', deadline);
  };

  const onSubmit = () => {
    if (updateAction) {
      const updated = TodoService.update(tempTodo.id, tempTodo);
      updateTodo(updated);
    } else {
      const newTodo = TodoService.create(
        tempTodo.title,
        tempTodo.comment,
        tempTodo.deadline
      );
      createTodo(newTodo);
    }
    onHide();
    message.success('Successfully updated');
  };

  const { title, comment, deadline } = tempTodo;
  const headerTitle = updateAction ? 'Update Todo' : 'New Todo';
  const SubmitButton = updateAction ? UpdateButton : AddButton;
  const closeBtn = <CloseButton onClose={onHide} />;
  const dateValueProp = deadline ? { value: deadline } : {};
  const suffixProps = { title, clearTitle };
  return (
    <Card className='todo-form' title={headerTitle} extra={closeBtn}>
      <Input
        value={title}
        placeholder='Todo title'
        suffix={<Suffix {...suffixProps} />}
        onChange={onInputChange.bind(null, 'title')}
      />
      <Divider>
        <span className='muted'>Details</span>
      </Divider>
      <TextArea
        value={comment}
        placeholder='Todo comment'
        autosize={{ minRows: 3 }}
        onChange={onInputChange.bind(null, 'comment')}
      />

      <DatePicker
        disabledDate={date => currentTime.isAfter(date)}
        onChange={onDeadlineChange}
        onOk={onDeadlineChange}
        {...dateValueProp}
        placeholder='Select Time'
        className='mt-2'
      />
      <div className='todo-form__submit-container'>
        <SubmitButton onClick={onSubmit} />
      </div>
    </Card>
  );
}

Form.propTypes = {
  createTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    comment: PropTypes.string,
    deadline: PropTypes.string,
  }),
};

const Suffix = ({ title, clearTitle }) => {
  if (!title) return <span />;
  return <Icon type='close-circle' onClick={clearTitle} />;
};

Suffix.propTypes = {
  title: PropTypes.string,
  clearTitle: PropTypes.func,
};
