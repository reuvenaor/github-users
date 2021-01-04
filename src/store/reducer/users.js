import ActionsType from '../types';

const initialState = {
  page: 1,
  pageCount: 1,
  query: 1,
  users: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsType.HYDRATE:
      return { ...state }; // , ...action.payload
    default:
      return state;
  }
}

export default rootReducer;
