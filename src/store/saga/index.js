import {fork} from 'redux-saga/effects'

import {findUserSagaWatcher} from './findUserSaga';
import {getUsersPagingSagaWatcher} from './getUsersPagingSaga'

export default function* rootSaga() {
  yield fork(getUsersPagingSagaWatcher);
  yield fork(findUserSagaWatcher);
}