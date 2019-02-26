import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Input, DatePicker, Divider, Icon } from 'antd';
import * as TodoService from 'domain/TodoService';
import { AddButton, CloseButton } from 'components/Buttons';
import { formatDate, currentTime } from 'utils';

const { TextArea } = Input;

export default class Form extends Component {
  static propTypes = {
    createTodo: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.currentTime = currentTime();
    this.state = { title: '', description: '', deadline: this.currentTime };
  }

  clearTitle = () => this.setState({ title: '' });

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onDescChange = e => {
    this.setState({ description: e.target.value });
  };

  onDeadlineChange = deadline => {
    this.setState({ deadline });
  };

  onSubmit = () => {
    const { title, description, deadline } = this.state;
    const date = deadline && formatDate(deadline);
    const todo = TodoService.create(title, description, date);
    this.props.createTodo(todo);
    this.props.onHide();
  };

  render() {
    const { title, description, deadline } = this.state;
    const suffix = title ? (
      <Icon type='close-circle' onClick={this.clearTitle} />
    ) : (
      <span />
    );
    const closeBtn = <CloseButton onClose={this.props.onHide} />;
    return (
      <Card className='todo-form' title='New Todo' extra={closeBtn}>
        <Input
          value={title}
          placeholder='Todo title'
          suffix={suffix}
          onChange={this.onTitleChange}
        />
        <Divider>
          <span className='muted'>Details</span>
        </Divider>
        <TextArea
          value={description}
          placeholder='Todo description'
          autosize={{ minRows: 3 }}
          onChange={this.onDescChange}
        />

        <DatePicker
          disabledDate={date => this.currentTime.isAfter(date)}
          onChange={this.onDeadlineChange}
          onOk={this.onDeadlineChange}
          value={deadline}
          placeholder='Select Time'
          className='mt-2'
        />
        <div className='todo-form__submit-container'>
          <AddButton onClick={this.onSubmit} />
        </div>
      </Card>
    );
  }
}
