import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, List, Checkbox, message } from 'antd';
import Header from 'components/ListItemHeader';
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

  onChange = id => {
    const newRoutines = this.state.routines.map(r => {
      if (r.id === id) {
        return { ...r, checked: !r.checked };
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
    message.success('Successfully updated');
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
          renderItem={({ id, comment, title, checked }) => (
            <List.Item
              actions={[
                <Checkbox
                  key={id}
                  checked={checked}
                  onChange={() => this.onChange(id)}
                />,
              ]}
            >
              <List.Item.Meta
                title={<Header title={title} />}
                description={comment}
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
