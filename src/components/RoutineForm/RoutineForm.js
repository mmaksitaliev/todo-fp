import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Input, Divider, Button } from 'antd';

import { CloseButton } from 'components/Buttons';
import * as RoutineService from 'domain/RoutineService';

const { TextArea } = Input;

export default class RoutinesForm extends Component {
  static propTypes = {
    createRoutine: PropTypes.func.isRequired,
    onHide: PropTypes.func,
  };

  state = {};

  onInputChange = (propName, e) => {
    this.setState({ [propName]: e.target.value });
  };

  onSubmit = () => {
    const { title, description } = this.state;
    const routine = RoutineService.create(title, description);
    this.props.createRoutine(routine);
    this.props.onHide();
  };

  render() {
    const { title, description } = this.state;
    const closeBtn = <CloseButton onClose={this.props.onHide} />;
    return (
      <Card className='todo-form' title='New Routine' extra={closeBtn}>
        <Input
          value={title}
          placeholder='Todo title'
          onChange={this.onInputChange.bind(null, 'title')}
        />
        <Divider>
          <span className='muted'>Details</span>
        </Divider>
        <TextArea
          value={description}
          placeholder='Todo description'
          autosize={{ minRows: 3 }}
          onChange={this.onInputChange.bind(null, 'description')}
        />
        <div className='todo-form__submit-container'>
          <Button type='primary' icon='plus' onClick={this.onSubmit}>
            Add
          </Button>
        </div>
      </Card>
    );
  }
}
