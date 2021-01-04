import ActionsType from '../types';


export function setUsers (payload) {
  return { type: ActionsType.SET_USERS, payload}
}

export function findUsers (query) {
  return { type: ActionsType.FIND_USERS, query}
}

export function addPage () {
  return { type: ActionsType.ADD_PAGE}
}

export function getUsersPaging () {
  return { type: ActionsType.GET_USERS_PAGING}
}

export function setLoad () {
  return { type: ActionsType.SET_LOAD}
}