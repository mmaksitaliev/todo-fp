import React from 'react';
import PropTypes from 'prop-types';

import { Nav } from './Nav';

NavList.propTypes = {
  links: PropTypes.array.isRequired,
};

export function NavList({ links }) {
  return (
    <ul className='sidebar__list'>
      {links.map((link, i) => (
        <Nav key={i} {...link} />
      ))}
    </ul>
  );
}
