import React from 'react';
import PropTypes from 'prop-types';
import NavList from 'components/NavList';

Sidebar.propTypes = {
  links: PropTypes.array.isRequired,
};

export default function Sidebar({ links }) {
  return (
    <div className='sidebar'>
      <NavList links={links} />
    </div>
  );
}
