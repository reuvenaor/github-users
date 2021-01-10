import ActionsType from '../types';

const initialState = {
  page: 1,
  total_count: 0,
  query: 1,
  users: [],
  load: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsType.HYDRATE:
      return {
        ...state,
        users: action.payload.users.users,
        total_count: action.payload.users.total_count,
        load: false,
      };
    case ActionsType.SET_USERS:
      return {
        ...state,
        users: action.payload.users,
        total_count: action.payload.total_count,
        load: false,
      };
    case ActionsType.FIND_USERS:
      return {
        ...state,
        query: action.query,
        page: 1
      };
    case ActionsType.ADD_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };

    case ActionsType.SET_LOAD:
      return {
        ...state,
        load: true
      }
    default:
      return state;
  }
}

export default rootReducer;
