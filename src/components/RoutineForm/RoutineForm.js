import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Input, Divider } from 'antd';

import { CloseButton, UpdateButton, AddButton } from 'components/Buttons';
import * as RoutineService from 'domain/RoutineService';

const { TextArea } = Input;

export default class RoutinesForm extends Component {
  static propTypes = {
    createRoutine: PropTypes.func.isRequired,
    updateRoutine: PropTypes.func.isRequired,
    routine: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      comment: PropTypes.string,
    }),
    onHide: PropTypes.func,
  };

  constructor(props) {
    super(props);
    const { routine } = props;

    if (routine && routine.id)
      this.state = {
        id: routine.id,
        title: routine.title,
        comment: routine.comment,
        updateAction: true,
      };
    else this.state = this.getDefaultState();
  }

  getDefaultState = () => {
    return { id: null, title: '', comment: '', updateAction: false };
  };

  onInputChange = (propName, e) => {
    this.setState({ [propName]: e.target.value });
  };

  onSubmit = () => {
    const { id, title, comment } = this.state;
    if (id) {
      const routine = RoutineService.update(id, title, comment);
      this.props.updateRoutine(routine);
    } else {
      const routine = RoutineService.create(title, comment);
      this.props.createRoutine(routine);
    }
    this.props.onHide();
  };

  render() {
    const { title, comment } = this.state;
    const headerTitle = this.state.updateAction
      ? 'Update Routine'
      : 'New Routine';
    const SubmitButton = this.state.updateAction ? UpdateButton : AddButton;
    const closeBtn = <CloseButton onClose={this.props.onHide} />;

    return (
      <Card className='todo-form' title={headerTitle} extra={closeBtn}>
        <Input
          value={title}
          placeholder='Todo title'
          onChange={this.onInputChange.bind(null, 'title')}
        />
        <Divider>
          <span className='muted'>Details</span>
        </Divider>
        <TextArea
          value={comment}
          placeholder='Todo comment'
          autosize={{ minRows: 3 }}
          onChange={this.onInputChange.bind(null, 'comment')}
        />
        <div className='todo-form__submit-container'>
          <SubmitButton onClick={this.onSubmit} />
        </div>
      </Card>
    );
  }
}
