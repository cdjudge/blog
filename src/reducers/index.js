import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
//import logger from './logger';
export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  //logger: logger
});
