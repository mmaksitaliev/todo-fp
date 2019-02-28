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
    this.setState({ formHidden: true, routine: null });
  };

  onEditClick = routine => {
    const newState = { routine };
    if (this.state.formHidden) newState.formHidden = false;
    this.setState(newState);
  };

  onRemoveClick = id => {
    // eslint-disable-next-line no-console
    console.log('remove', id);
  };

  getFormProps = () => {
    const props = { onHide: this.onFormHide };
    let { routine } = this.state;
    if (routine) {
      props.key = routine.id;
      props.routine = routine;
    }
    return props;
  };

  renderActions = () => {
    return <NewButton onClick={this.onFormShow}>New Routine</NewButton>;
  };

  render() {
    const { routines } = this.props;
    let formProps = this.getFormProps();

    const headerActions = this.renderActions();

    return (
      <div className='content'>
        <Header title={'Routines'} actions={headerActions} />

        {!this.state.formHidden && <RoutineForm {...formProps} />}

        <RoutineList
          routines={routines}
          onEditClick={this.onEditClick}
          onRemoveClick={this.onRemoveClick}
        />
      </div>
    );
  }
}
