import React from 'react'

import { Routine } from 'domain/Routine'
import { Create } from './Create'
import { Update } from './Update'

type Props = {
  routine: Routine
  onHide: () => void
}

export const RoutineForm = ({ routine, onHide }: Props) => {
  return routine ? (
    <Update routine={routine} onHide={onHide} />
  ) : (
    <Create onHide={onHide} />
  )
}
