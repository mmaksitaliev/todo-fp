import { combineReducers } from 'redux';

import todos from './todo/index';
import routines from './routine/index';

export default combineReducers({ todos, routines });
