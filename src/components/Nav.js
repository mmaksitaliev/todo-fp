import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

Nav.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export function Nav({ path, label }) {
  return (
    <li>
      <NavLink to={path} className='sidebar__link' activeClassName='active'>
        {label}
      </NavLink>
    </li>
  );
}
