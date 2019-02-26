import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/Sidebar';
import GeneralContent from 'components/content/General';
import RoutinesContent from 'components/content/Routines';
import { routes } from 'App';

export default class MainPage extends Component {
  render() {
    const { pathname } = this.props.location;
    const Content = pathname === '/routines' ? RoutinesContent : GeneralContent;
    return (
      <main className='app'>
        <Sidebar links={routes} />
        <Content />
      </main>
    );
  }
}

MainPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
