import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

import { Routine } from 'domain/Routine'
import { RootState } from 'store'
import { deleteRoutine } from 'store/actions/routine'
import { useFormVisibility } from 'hooks/form'
import { RoutineList } from 'components/RoutineList'
import { RoutineForm } from 'components/RoutineForm'
import { NewButton } from 'components/Buttons'

import { Header } from '../Header'

export function Routines() {
  const dispatch = useDispatch()
  const routines = useSelector(({ routines }: RootState) => routines)

  const [routine, setRoutine] = useState()
  const [formHidden, onFormShow, onFormHide] = useFormVisibility()

  const onEditClick = (routine: Routine) => {
    setRoutine(routine)
    onFormShow()
  }

  const onRemoveClick = (id: string) => {
    dispatch(deleteRoutine(id))
    message.success('Successfully deleted')
  }

  const formProps = {
    routine,
    onHide: () => {
      onFormHide()
      setRoutine({})
    },
  }

  return (
    <div className='content'>
      <Header title={'Routines'}>
        <NewButton onClick={onFormShow}>New Routine</NewButton>
      </Header>

      {!formHidden && <RoutineForm {...formProps} />}

      <RoutineList
        routines={routines}
        onEditClick={onEditClick}
        onRemoveClick={onRemoveClick}
      />
    </div>
  )
}
