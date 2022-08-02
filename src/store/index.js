import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { authReducer } from './auth/authReducer';
import { postsReducer } from './postsData/postsDataReducer';
import {commentsDataReduser} from './commentsData/commentsDataReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  authReducer,
  postsReducer,
  commentsDataReduser,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
