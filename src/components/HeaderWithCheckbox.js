import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

Header.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default function Header({ id, title, checked, onChange }) {
  return (
    <div className='todo__header'>
      <span>{title}</span>
      <span>
        <Checkbox
          checked={checked}
          onChange={e => onChange(id, e.target.checked)}
        />
      </span>
    </div>
  );
}
