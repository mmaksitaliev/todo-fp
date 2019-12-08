import React from 'react'
import PropTypes from 'prop-types'

export function Header({ title, actions }) {
  return (
    <div className='content__header'>
      <h3 className='content__title'>{title}</h3>
      <div className='content__header-actions'>{actions}</div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.element,
}
