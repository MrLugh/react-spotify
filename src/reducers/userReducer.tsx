import {
  FETCH_USER_SUCCESS,
  UserActionTypes,
  FETCH_USER_PENDING,
  FETCH_USER_ERROR,
} from "../store/types/actionTypes";

export const userReducer = (state = {}, action: UserActionTypes) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        response: action.payload,
        userPending: false,
        userError: false,
      };

    case FETCH_USER_PENDING:
      return {
        ...state,
        response: {},
        userPending: true,
        userError: false,
      };

    case FETCH_USER_ERROR:
      return {
        ...state,
        response: {},
        userPending: false,
        userError: true,
      };

    default:
      return state;
  }
};

export default userReducer;
