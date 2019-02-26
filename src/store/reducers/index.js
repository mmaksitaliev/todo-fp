import { combineReducers } from 'redux';

import todos from './todo';
import routines from './routine';

export default combineReducers({ todos, routines });
