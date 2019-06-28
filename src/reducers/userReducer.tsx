import { FETCH_USER, UserActionTypes } from "../store/types/actionTypes";

export const userReducer = (state = {}, action: UserActionTypes) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
