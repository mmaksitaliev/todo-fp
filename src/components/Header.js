import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
  children: PropTypes.object.isRequired,
};

export function Header({ children }) {
  return <div className='header spacebtw'>{children}</div>;
}
