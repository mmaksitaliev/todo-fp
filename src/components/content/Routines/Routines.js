import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';

import { RoutineList } from 'components/RoutineList';
import { RoutineForm } from 'components/RoutineForm';
import { NewButton } from 'components/Buttons';
import { useFormVisibility } from 'hooks/form';

import { Header } from '../Header';

export function RoutinesFC(props) {
  const [routine, setRoutine] = useState();
  const [formHidden, onFormShow, onFormHide] = useFormVisibility();

  const onEditClick = routine => {
    setRoutine(routine);
    onFormShow();
  };

  const onRemoveClick = id => {
    props.deleteRoutine(id);
    message.success('Successfully deleted');
  };

  const formProps = {
    routine,
    onHide: () => {
      onFormHide();
      setRoutine();
    },
  };

  return (
    <div className='content'>
      <Header
        title={'Routines'}
        actions={<NewButton onClick={onFormShow}>New Routine</NewButton>}
      />

      {!formHidden && <RoutineForm {...formProps} />}

      <RoutineList
        routines={props.routines}
        onEditClick={onEditClick}
        onRemoveClick={onRemoveClick}
      />
    </div>
  );
}

RoutinesFC.propTypes = {
  routines: PropTypes.array.isRequired,
  deleteRoutine: PropTypes.func.isRequired,
};
