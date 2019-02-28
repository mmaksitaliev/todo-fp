import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Input, DatePicker, Divider, Icon } from 'antd';
import moment from 'moment';

import * as TodoService from 'domain/TodoService';
import { AddButton, UpdateButton, CloseButton } from 'components/Buttons';
import { currentTime, endOfToday } from 'utils';

const { TextArea } = Input;

export default class Form extends Component {
  static propTypes = {
    createTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
    todo: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      comment: PropTypes.string,
      deadline: PropTypes.string,
    }),
  };

  constructor(props) {
    super(props);
    this.currentTime = currentTime();
    const { todo } = props;
    if (todo && todo.id) {
      const deadline = todo.deadline ? moment(todo.deadline) : null;
      this.state = {
        todo: { ...todo, deadline },
        updateAction: true,
      };
    } else this.state = this.getDefaultState();
  }

  getDefaultState = () => ({
    todo: {
      title: '',
      comment: '',
      deadline: endOfToday(),
    },
    updateAction: false,
  });

  clearTitle = () => this.onInputChange('title', '');

  onInputChange = (prop, e) => {
    const todo = { ...this.state.todo, [prop]: e.target.value };
    this.setState({ todo });
  };

  onDeadlineChange = deadline => {
    const todo = { ...this.state.todo, deadline };
    this.setState({ todo });
  };

  onSubmit = () => {
    const { todo, updateAction } = this.state;
    if (updateAction) {
      const updated = TodoService.update(todo.id, todo);
      this.props.updateTodo(updated);
    } else {
      const newTodo = TodoService.create(
        todo.title,
        todo.comment,
        todo.deadline
      );
      this.props.createTodo(newTodo);
    }
    this.props.onHide();
  };

  renderSuffix = () => {
    if (!this.state.title) return <span />;
    return <Icon type='close-circle' onClick={this.clearTitle} />;
  };

  render() {
    const { title, comment, deadline } = this.state.todo;
    const dateValueProp = deadline ? { value: deadline } : {};
    const suffix = this.renderSuffix();
    const closeBtn = <CloseButton onClose={this.props.onHide} />;
    const headerTitle = this.state.updateAction ? 'Update Todo' : 'New Todo';
    const SubmitButton = this.state.updateAction ? UpdateButton : AddButton;
    return (
      <Card className='todo-form' title={headerTitle} extra={closeBtn}>
        <Input
          value={title}
          placeholder='Todo title'
          suffix={suffix}
          onChange={this.onInputChange.bind(null, 'title')}
        />
        <Divider>
          <span className='muted'>Details</span>
        </Divider>
        <TextArea
          value={comment}
          placeholder='Todo comment'
          autosize={{ minRows: 3 }}
          onChange={this.onInputChange.bind(null, 'comment')}
        />

        <DatePicker
          disabledDate={date => this.currentTime.isAfter(date)}
          onChange={this.onDeadlineChange}
          onOk={this.onDeadlineChange}
          {...dateValueProp}
          placeholder='Select Time'
          className='mt-2'
        />
        <div className='todo-form__submit-container'>
          <SubmitButton onClick={this.onSubmit} />
        </div>
      </Card>
    );
  }
}
