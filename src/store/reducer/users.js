import ActionsType from '../types';

const initialState = {
  page: 1,
  total_count: 1,
  query: 1,
  users: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsType.HYDRATE:
      return { ...state }; // , ...action.payload
    case ActionsType.SET_USERS:
      return {
        ...state,
        users: action.payload.users,
        total_count: action.payload.total_count,
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
    default:
      return state;
  }
}

export default rootReducer;
