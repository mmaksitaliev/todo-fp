import React from 'react';
import Nav from './Nav';
import PropTypes from 'prop-types';

NavList.propTypes = {
  links: PropTypes.array.isRequired,
};

export default function NavList({ links }) {
  return (
    <ul className='sidebar__list'>
      {links.map((link, i) => (
        <Nav key={i} {...link} />
      ))}
    </ul>
  );
}
