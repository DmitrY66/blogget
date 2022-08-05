import axios from 'axios';
import { URL_API } from '../../api/const';
import { postsSlice } from './postsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';


// асинхрон
// export const postsDataAsync2 = (newPage) => (dispatch, getState) => {
//   let page = getState().postsReducer.page;
//   if (newPage) {
//     page = newPage;
//     dispatch(postsSlice.actions.changePage({ page }));
//   }

//   const token = getState().tokenReducer.token;
//   const after = getState().postsReducer.after;
//   const loading = getState().postsReducer.loading;
//   const isLast = getState().postsReducer.isLast;

//   if (!token || loading || isLast) return;
//   dispatch(postsSlice.actions.postsRequest());

//   axios(`${URL_API}/${page}?limit=6&${after ? `after=${after}` : ''}`,
//     {
//       headers: {
//         Authorization: `bearer ${token}`,
//       },
//     })
//     .then(response => {
//       const data = response.data.data;
//       console.log('data: ', data);
//       // const after = data.after;
//       // console.log('after: ', after);
//       if (after) {
//         dispatch(postsSlice.actions.postsRequestSuccessAfter({ data }));
//       } else {
//         dispatch(postsSlice.actions.postsRequestSuccess({ data }));
//       }
//     })
//     .catch(error => {
//       console.error('произошла ошибка', error);
//       dispatch(postsSlice.actions.postsRequestError({ error }));
//     });
// };


export const postsDataAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, { getState, dispatch }) => {
    let page = getState().postsReducer.page;
    // console.log('page: ', page);
    if (newPage) {
      // console.log('newPage: ', newPage);
      page = newPage;
      // return { page };
      dispatch(postsSlice.actions.changePage({ page }));
    }

    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const loading = getState().postsReducer.loading;
    const isLast = getState().postsReducer.isLast;

    if (!token || loading || isLast) return;
    // dispatch(postsSlice.actions.postsRequest());

    return axios(`${URL_API}/${page}?limit=6&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(response => {
        const data = response.data.data;
        if (after) {
          dispatch(postsSlice.actions.postsRequestSuccessAfter({ data }));
          // return { data };
        } else {
          dispatch(postsSlice.actions.postsRequestSuccess({ data }));
          // return { data };
        }
      })
      .catch(error => {
        console.error('произошла ошибка', error);
        dispatch(postsSlice.actions.postsRequestError({ error }));
        // return { error };
      });
  },
);
