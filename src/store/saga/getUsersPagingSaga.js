import { call, put, takeLatest, select } from 'redux-saga/effects'
import ActionsType from '../types';
import { setUsers } from '../actions'
import { githubApi } from '../api';
import { selectPage, selectQuery, selectUsers } from '../selctors'

export function* getUsersPagingSagaWatcher() {
  yield takeLatest(ActionsType.GET_USERS_PAGING, getUsersPagingSaga);
}

function* getUsersPagingSaga() {
  try {
    const page = yield select(selectPage)
    const query = yield select(selectQuery)
    const users = yield select(selectUsers)
    const data = yield call(githubApi, { page, query });
    const newUsers = yield users.concat(data.data.page.items);
    yield put(setUsers({users: newUsers, total_count: data.data.page.total_count}));
  } catch (e) {
    // yield put({type: ActionsType.GET_USERS_FAILED, message: e.message});
  }
}
