import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

NewTodoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function NewTodoButton({ onClick }) {
  const withoutEvent = () => {
    onClick();
  };
  return (
    <Button
      type='primary'
      shape='round'
      icon='plus'
      size='default'
      onClick={withoutEvent}
    >
      New Todo
    </Button>
  );
}
