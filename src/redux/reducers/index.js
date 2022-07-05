import { combineReducers } from 'redux';
import SessionInfoReducer from './SessionInfo';
import ReceptionistReducer from './ReceptionistInfo';

export default combineReducers({
  SessionInfoReducer,
  ReceptionistReducer,
});
