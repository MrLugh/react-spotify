import { SET_TOKEN, TokenActionTypes } from "../store/types/actionTypes";

export const tokenReducer = (state = {}, action: TokenActionTypes) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default tokenReducer;
