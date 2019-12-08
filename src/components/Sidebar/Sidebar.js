import React from 'react'
import PropTypes from 'prop-types'

import { NavList } from 'components/NavList'

SidebarFC.propTypes = {
  links: PropTypes.array.isRequired,
}

export function SidebarFC({ links }) {
  return (
    <div className='sidebar'>
      <NavList links={links} />
    </div>
  )
}
