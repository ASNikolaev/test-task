import {combineReducers} from 'redux-immutable';

import Department from './Department';
import Employees from './Employees';
const IndexReducer = combineReducers({Department, Employees})

export default IndexReducer
