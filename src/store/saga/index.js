import {fork} from 'redux-saga/effects'

import {findUserSagaWatcher} from './githubUsersSaga';

export default function* rootSaga() {
  yield fork(findUserSagaWatcher);
}