import { SET_PLAYER, SetPlayerActionTypes } from "../store/types/actionTypes";

export const setPlayer = (url: string): SetPlayerActionTypes => {
  return {
    type: SET_PLAYER,
    payload: url,
  };
};
