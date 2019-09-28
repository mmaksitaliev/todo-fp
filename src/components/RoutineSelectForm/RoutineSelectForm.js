import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, List, Checkbox, message } from 'antd';

import { createFromRoutine } from 'domain/TodoService';
import { AddButton, CloseButton } from 'components/Buttons';
import { Header } from 'components/ListItemHeader';

export function RoutineSelectFormFC(props) {
  const [routines, setRoutines] = useState([...props.routines]);

  const onChange = id => {
    const newRoutines = routines.map(r => {
      if (r.id === id) {
        return { ...r, checked: !r.checked };
      }
      return r;
    });

    setRoutines(newRoutines);
  };

  const onSubmit = () => {
    const isSelected = routine => routine.checked;
    const newTodos = routines.filter(isSelected).map(createFromRoutine);
    props.createTodos(newTodos);
    props.onHide();
    message.success('Successfully updated');
  };

  const closeBtn = <CloseButton onClose={props.onHide} />;

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
                onChange={() => onChange(id)}
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
        <AddButton onClick={onSubmit} />
      </div>
    </Card>
  );
}

RoutineSelectFormFC.propTypes = {
  routines: PropTypes.array.isRequired,
  createTodos: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
};
