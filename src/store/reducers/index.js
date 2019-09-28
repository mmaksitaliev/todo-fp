import { combineReducers } from 'redux';

import { todos } from './todo/index';
import { routines } from './routine/index';

export const rootReducer = combineReducers({ todos, routines });
