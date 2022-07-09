import { combineReducers } from 'redux';
import game from './gameSlice';
import user from './userSlice';
import window from './windowSlice';

export const rootReducer = combineReducers({
  game,
  user,
  window,
});
