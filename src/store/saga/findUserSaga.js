import { call, put, takeLatest } from 'redux-saga/effects'
import ActionsType from '../types';
import {setUsers, setLoad} from '../actions'
import {githubApi} from '../api';

export function* findUserSagaWatcher() {
  yield takeLatest(ActionsType.FIND_USERS, findUserSaga);
}

function* findUserSaga(action) {
   try {    
    yield put(setLoad());
     const data = yield call(githubApi,{ page: 1, query: action.query});
     yield put(setUsers({users: data.data.page.items, total_count: data.data.page.total_count}));
   } catch (e) {
      yield put({type: ActionsType.GET_USERS_FAILED, message: e.message});
   }
}
