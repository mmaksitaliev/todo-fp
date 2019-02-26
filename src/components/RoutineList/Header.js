import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function Header({ title }) {
  return (
    <div className='todo__header'>
      <span>{title}</span>
    </div>
  );
}
