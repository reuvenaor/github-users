import ActionsType from '../types';


export function setUsers (payload) {
  console.log('setUsers Action', payload)
  return { type: ActionsType.SET_USERS, payload}
}

export function findUsers (query) {
  console.log('findUsers Action', query)
  return { type: ActionsType.FIND_USERS, query}
}

export function addPage () {
  console.log('addPage Action')
  return { type: ActionsType.ADD_PAGE}
}

export function getUsersPaging (page) {
  return { type: ActionsType.GET_USERS_PAGING}
}