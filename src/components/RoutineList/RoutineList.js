import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import Header from './Header';

export default function RoutineList({ routines }) {
  return (
    <List
      className='todo__list'
      itemLayout='horizontal'
      dataSource={routines}
      renderItem={routine => (
        <List.Item>
          <List.Item.Meta
            title={<Header title={routine.title} />}
            description={routine.comment}
          />
        </List.Item>
      )}
    />
  );
}

RoutineList.propTypes = {
  routines: PropTypes.array.isRequired,
};
