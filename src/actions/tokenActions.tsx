import { SET_TOKEN, TokenActionTypes } from "../store/types/actionTypes";

export const setToken = (token: string): TokenActionTypes => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};
