import ActionsType from '../types';


export function setUsers (payload) {
  console.log('setUsers Action', payload)
  return { type: ActionsType.SET_USERS, payload}
}

export function findUsers (query) {
  console.log('findUsers Action', query)
  return { type: ActionsType.FIND_USERS, query}
}