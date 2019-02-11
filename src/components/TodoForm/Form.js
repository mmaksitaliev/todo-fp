import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as TodoService from 'domain/TodoService';
import { Card, Button, Input, DatePicker, Divider, Icon } from 'antd';
import CloseButton from 'components/CloseButton';
import { formattedDate } from 'utils';

const { TextArea } = Input;

export default class Form extends Component {
  static propTypes = {
    createTodo: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  state = { title: '', description: '', deadline: '' };

  clearTitle = () => this.setState({ title: '' });

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onDescChange = e => {
    this.setState({ description: e.target.value });
  };

  onDeadlineChange = value => {
    this.setState({ deadline: formattedDate(value) });
  };

  onSubmit = () => {
    const { title, description, deadline } = this.state;
    const todo = TodoService.create(title, description, deadline);
    this.props.createTodo(todo);
  };

  render() {
    const { title, description } = this.state;
    const suffix = title ? (
      <Icon type='close-circle' onClick={this.clearTitle} />
    ) : null;
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
          showTime
          placeholder='Select Time'
          onChange={this.onDeadlineChange}
          onOk={this.onDeadlineChange}
        />
        <div className='todo-form__submit-container'>
          <Button type='primary' icon='plus' onClick={this.onSubmit}>
            Add
          </Button>
        </div>
      </Card>
    );
  }
}
