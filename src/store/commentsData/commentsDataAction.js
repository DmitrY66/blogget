import axios from 'axios';
import { URL_API } from '../../api/const';
import { commentsSlice } from './commentsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const COMMENTS_REQUEST_STARTED = 'COMMENTS_REQUEST_STARTED';
// export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
// export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';


// // синхрон   postsReducer
// export const commentsDataRequest = () => ({
//   type: COMMENTS_REQUEST_STARTED,
// });

// export const commentsDataRequestSuccess = (data) => ({
//   type: COMMENTS_REQUEST_SUCCESS,
//   data,
// });

// export const commentsDataRequestError = (error) => ({
//   type: COMMENTS_REQUEST_ERROR,
//   error,
// });


// const data = useSelector(state => state.postsReducer);
// console.log('data: ', data);

// асинхрон
export const commentsDataAsync2 = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;
  dispatch(commentsSlice.actions.commentsDataRequest());

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(response => {
      const post = response.data[0].data.children[0].data;
      const comments = response.data[1].data.children.map(item => item.data);
      dispatch(commentsSlice.actions.commentsDataRequestSuccess({ post, comments }));
    })
    .catch((error) => {
      console.error('ошибище!!!', error);
      // dispatch(commentsDataRequestError(error.toString()));
      dispatch(commentsSlice.actions.commentsDataRequestError(error));
    });
};

export const commentsDataAsync = createAsyncThunk(
  'comments/fetch',
  (id, { getState }) => {
    const token = getState().tokenReducer.token;

    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        const post = response.data[0].data.children[0].data;
        const comments = response.data[1].data.children.map(item => item.data);
        return { post, comments };
      })
      .catch((error) => {
        console.error('ошибище!!!', error);
        return { error };
      });
  },
);
