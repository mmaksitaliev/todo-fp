import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export function Header({ title, children }) {
  return (
    <div className='todo__header'>
      <span>{title}</span>
      <span>{children}</span>
    </div>
  );
}
