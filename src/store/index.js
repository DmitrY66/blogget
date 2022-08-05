// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { authReducer } from './auth/authReducer';
import postsReducer from './postsData/postsSlice';
// import { commentsDataReduser } from './commentsData/commentsDataReducer';
import commentsDataReduser from './commentsData/commentsSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postsReducer,
    commentsDataReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),

});


// const rootReducer = combineReducers({
//   tokenReducer,
//   commentReducer,
//   authReducer,
//   postsReducer,
//   commentsDataReduser,
// });

// export const storeOld = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
