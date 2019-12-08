import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { routes } from 'App'
import { Sidebar } from 'components/Sidebar'
import { General } from 'components/content/General'
import { Routines } from 'components/content/Routines'

export class MainPage extends Component {
  render() {
    const { pathname } = this.props.location
    const Content = pathname === '/routines' ? Routines : General
    return (
      <main className='app'>
        <Sidebar links={routes} />
        <Content />
      </main>
    )
  }
}

MainPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
