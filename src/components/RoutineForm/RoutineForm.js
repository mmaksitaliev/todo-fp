import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Input, Divider, message } from 'antd';

import { CloseButton, UpdateButton, AddButton } from 'components/Buttons';
import * as RoutineService from 'domain/RoutineService';
import { useStateObject } from 'hooks/form';

const { TextArea } = Input;

export default function RoutineForm(props) {
  const [routine, onPropChange, setRoutine] = useStateObject({
    id: null,
    title: '',
    comment: '',
  });
  const [updateAction, setUpdateAction] = useState(false);

  useEffect(() => {
    const { routine } = props;

    if (routine && routine.id) {
      setRoutine({ ...routine });
      setUpdateAction(true);
    }
  }, [props.routine]);

  const onInputChange = (propName, e) => {
    onPropChange(propName, e.target.value);
  };

  const onSubmit = () => {
    const { id, title, comment } = routine;
    if (updateAction) {
      const routine = RoutineService.update(id, title, comment);
      props.updateRoutine(routine);
    } else {
      const routine = RoutineService.create(title, comment);
      props.createRoutine(routine);
    }
    props.onHide();
    message.success('Successfully created a new Routine');
  };

  const { title, comment } = routine;
  const headerTitle = updateAction ? 'Update Routine' : 'New Routine';
  const SubmitButton = updateAction ? UpdateButton : AddButton;
  const closeBtn = <CloseButton onClose={props.onHide} />;

  return (
    <Card className='todo-form' title={headerTitle} extra={closeBtn}>
      <Input
        value={title}
        placeholder='Todo title'
        onChange={onInputChange.bind(null, 'title')}
      />
      <Divider>
        <span className='muted'>Details</span>
      </Divider>
      <TextArea
        value={comment}
        placeholder='Todo comment'
        autosize={{ minRows: 3 }}
        onChange={onInputChange.bind(null, 'comment')}
      />
      <div className='todo-form__submit-container'>
        <SubmitButton onClick={onSubmit} />
      </div>
    </Card>
  );
}

RoutineForm.propTypes = {
  createRoutine: PropTypes.func.isRequired,
  updateRoutine: PropTypes.func.isRequired,
  routine: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }),
  onHide: PropTypes.func,
};
