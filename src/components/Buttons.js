import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

export function NewButton({ children, onClick }) {
  return (
    <Button
      type='primary'
      shape='round'
      icon='plus'
      size='small'
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

NewButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func.isRequired,
};

export function AddRoutineButton({ size, onClick }) {
  return (
    <Button
      type='secondary'
      shape='round'
      icon='copy'
      size={size}
      onClick={onClick}
    >
      Add Routine
    </Button>
  );
}

AddRoutineButton.defaultProps = {
  size: 'small',
};

AddRoutineButton.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
};
export function AddButton({ onClick, children }) {
  return (
    <Button type='primary' icon='plus' onClick={onClick}>
      {children || 'Add'}
    </Button>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export function CloseButton({ onClose, type }) {
  return (
    <Button
      onClick={onClose}
      icon='close'
      size='small'
      shape='round'
      type={type}
    />
  );
}

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};
