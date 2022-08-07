import { apply, call, put, select, takeLatest } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
// import axios from 'axios';
import { searchRequestError, searchRequestSuccess, SEARCH_REQUEST } from './searchAction';

// const fetchSearch = async (action, token) => {
export function* fetchSearch(search) {
  const token = yield select(state => state.tokenReducer.token);

  try {
    const request = yield call(fetch, `${URL_API}/search?q=${search.search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    // console.log('`${URL_API}/search?q=${search}`: ', `${URL_API}/search?q=${search.search}`);

    const response = yield apply(request, request.json);
    // console.log('data: ', response.data);

    yield put(searchRequestSuccess(response.data));
  } catch (e) {
    yield put(searchRequestError(e));
  }
}

// function* workerSearch(action) {
//   const token = yield select(state => state.tokenReducer.token);
//   const { data } = yield call(fetchSearch, action.search, token);
//   console.log('data: ', data);
//   yield put(searchRequestSuccess(data));
// }

export function* watchSearch() {
  // yield takeLatest(SEARCH_REQUEST, workerSearch);
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}

