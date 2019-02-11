import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoList from 'components/TodoList';
import NewTodoButton from 'components/NewTodoButton';
import TodoForm from 'components/TodoForm';

export default class Content extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

  state = { formHidden: true };

  onFormShow = () => {
    this.setState({ formHidden: false });
  };

  onFormHide = () => {
    this.setState({ formHidden: true });
  };

  render() {
    const { todos, title } = this.props;
    const { formHidden } = this.state;

    return (
      <div className='content'>
        <div className='content__header'>
          <h3 className='content__title'>{title}</h3>
          <NewTodoButton onClick={this.onFormShow} />
        </div>

        {!formHidden && (
          <TodoForm onShow={this.onFormShow} onHide={this.onFormHide} />
        )}

        <div className='todo__list'>
          <TodoList todos={todos} />
        </div>
      </div>
    );
  }
}
