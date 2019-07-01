import { UserLogged } from "../models/models";
import {
  FETCH_USER_SUCCESS,
  UserActionTypes,
  UserActionType,
  FETCH_USER_PENDING,
  FETCH_USER_ERROR,
} from "../store/types/actionTypes";
import { SPOTIFY } from "../constants/api";

export const fetchUserSuccess = (user: UserLogged): UserActionTypes => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserPending = (): UserActionTypes => {
  return {
    type: FETCH_USER_PENDING,
  };
};

export const fetchUserError = (err: Error): UserActionTypes => {
  return {
    type: FETCH_USER_ERROR,
  };
};

export const fetchUser: UserActionType = (accessToken: string) => {
  return (dispatch: CallableFunction) => {
    const request = new Request(`${SPOTIFY.api}/me`, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
      }),
    });

    dispatch(fetchUserPending());

    fetch(request)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        if (res.status === 401) {
          window.location.href = "./";
          return;
        }
        throw Error(res.statusText);
      })
      .then((res) => {
        dispatch(fetchUserSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchUserError(err));
      });
  };
};
