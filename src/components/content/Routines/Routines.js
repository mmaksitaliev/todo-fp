import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NewButton } from 'components/Buttons';
import RoutineList from 'components/RoutineList';
import Header from '../Header';
import RoutineForm from 'components/RoutineForm';

export default class Routines extends Component {
  static propTypes = {
    routines: PropTypes.array.isRequired,
  };

  state = { formHidden: true };

  onFormShow = () => {
    this.setState({ formHidden: false });
  };

  onFormHide = () => {
    this.setState({ formHidden: true });
  };

  renderActions = () => {
    return <NewButton onClick={this.onFormShow}>New Routine</NewButton>;
  };

  render() {
    const { routines } = this.props;

    const headerActions = this.renderActions();

    return (
      <div className='content'>
        <Header title={'Routines'} actions={headerActions} />

        {!this.state.formHidden && <RoutineForm onHide={this.onFormHide} />}

        <RoutineList routines={routines} />
      </div>
    );
  }
}
