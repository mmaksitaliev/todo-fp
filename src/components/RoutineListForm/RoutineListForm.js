import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, List } from 'antd';
import Header from 'components/HeaderWithCheckbox';
import { AddButton, CloseButton } from 'components/Buttons';
import { createFromRoutine } from 'domain/TodoService';

export default class RoutineListForm extends Component {
  static propTypes = {
    routines: PropTypes.array.isRequired,
    createTodos: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { routines: [...props.routines] };
  }

  onChange = (id, checked) => {
    const newRoutines = this.state.routines.map(r => {
      if (r.id === id) {
        return { ...r, checked };
      }
      return r;
    });

    this.setState({ routines: newRoutines });
  };

  onSubmit = () => {
    const isSelected = todo => todo.checked;
    const newTodos = this.state.routines
      .filter(isSelected)
      .map(createFromRoutine);
    this.props.createTodos(newTodos);
    this.props.onHide();
  };

  render() {
    const { routines } = this.state;
    const closeBtn = <CloseButton onClose={this.props.onHide} />;
    return (
      <Card title='Add from routines' extra={closeBtn}>
        <List
          className='todo__list'
          itemLayout='horizontal'
          dataSource={routines}
          renderItem={routine => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Header
                    id={routine.id}
                    title={routine.title}
                    checked={routine.checked}
                    onChange={this.onChange}
                  />
                }
                description={routine.description}
              />
            </List.Item>
          )}
        />
        <div className='todo-form__submit-container'>
          <AddButton onClick={this.onSubmit} />
        </div>
      </Card>
    );
  }
}
