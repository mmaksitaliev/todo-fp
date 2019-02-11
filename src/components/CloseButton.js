import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default function CloseButton({ onClose, type }) {
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
