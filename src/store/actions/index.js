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

export function getUsersPaging (page) {
  return { type: ActionsType.GET_USERS_PAGING}
}