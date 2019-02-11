import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

Header.propTypes = {
  todo: PropTypes.object.isRequired,
  onCompleteChange: PropTypes.func.isRequired,
};

export default function Header({ todo, onCompleteChange }) {
  return (
    <div className='todo__header'>
      <span>{todo.title}</span>
      <span>
        <Checkbox
          checked={todo.completed}
          onChange={value => onCompleteChange(todo.id, value)}
        />
      </span>
    </div>
  );
}
