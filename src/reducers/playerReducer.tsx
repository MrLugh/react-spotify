import { SET_PLAYER, SetPlayerActionTypes } from "../store/types/actionTypes";

export const playerReducer = (state = {}, action: SetPlayerActionTypes) => {
  switch (action.type) {
    case SET_PLAYER:
      return {
        ...state,
        player: action.payload,
      };

    default:
      return state;
  }
};

export default playerReducer;
