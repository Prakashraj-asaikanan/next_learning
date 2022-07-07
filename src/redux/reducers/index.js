import { combineReducers } from 'redux';
import LoginReducer from './Login';
import ReceptionistReducer from './ReceptionistInfo';

const rootReducer = combineReducers({
  LoginReducer,
  ReceptionistReducer,
});

export default rootReducer;
