import React from 'react'
import { List } from 'antd'

import { Routines, Routine } from 'domain/Routine'
import { RoutineItem } from './Item'

export type RoutineListProps = {
  routines: Routines
  onEditClick: (routine: Routine) => void
  onRemoveClick: (id: string) => void
}

export function RoutineList({
  routines,
  onEditClick,
  onRemoveClick,
}: RoutineListProps) {
  return (
    <List
      className='todo__list'
      itemLayout='horizontal'
      dataSource={routines}
      renderItem={routine => (
        <RoutineItem
          routine={routine}
          onEditClick={onEditClick}
          onRemoveClick={onRemoveClick}
        />
      )}
    />
  )
}
