import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';
import RoutineListForm from 'components/RoutineListForm';
import { AddRoutineButton, NewButton } from 'components/Buttons';
import Header from '../Header';

export default class Content extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

  state = { todoFormHidden: true, routineFormHidden: true };

  onTodoFormShow = () => {
    this.setState({ todoFormHidden: false, routineFormHidden: true });
  };

  onTodoFormHide = () => {
    this.setState({ todoFormHidden: true });
  };

  onRoutineFormShow = () => {
    this.setState({ routineFormHidden: false, todoFormHidden: true });
  };

  onRoutineFormHide = () => {
    this.setState({ routineFormHidden: true });
  };

  renderActions = () => {
    return (
      <Button.Group>
        <AddRoutineButton onClick={this.onRoutineFormShow} />
        <NewButton onClick={this.onTodoFormShow}>New Todo</NewButton>
      </Button.Group>
    );
  };

  render() {
    const { todos, title } = this.props;
    const { todoFormHidden, routineFormHidden } = this.state;

    const headerActions = this.renderActions();

    return (
      <div className='content'>
        <Header title={title} actions={headerActions} />

        {!todoFormHidden && <TodoForm onHide={this.onTodoFormHide} />}

        {!routineFormHidden && (
          <RoutineListForm onHide={this.onRoutineFormHide} />
        )}

        <TodoList todos={todos} />
      </div>
    );
  }
}
