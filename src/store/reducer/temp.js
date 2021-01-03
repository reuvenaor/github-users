import ActionsType from '../types';

const initialState = {

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
