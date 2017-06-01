import 'whatwg-fetch';
import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_RATE, RECEIVE_RATE } from './constants';

export function* fetchRate(action) {
  const { payload: { base, quote, amount } } = action;
  const data = yield call(fetch, `http://localhost:3001/rates/${base}/${quote}?amount=${amount}`);
  const json = yield call([data, data.json]);
  yield put({
    type: RECEIVE_RATE,
    payload: json,
  });
}

export function* defaultSaga() {
  yield takeEvery(FETCH_RATE, fetchRate);
}

export default [
  defaultSaga,
];
