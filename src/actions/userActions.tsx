import { UserLogged } from "../store/types/models";
import { FETCH_USER, UserActionTypes } from "../store/types/actionTypes";

export const fetchUserSuccess = (user: UserLogged): UserActionTypes => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};

export const fetchUser = (accessToken: string) => {
  return (dispatch: any) => {
    const request = new Request("https://api.spotify.com/v1/me", {
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
      }),
    });

    fetch(request)
      .then((res) => {
        if (res.status === 401) {
          window.location.href = "./";
        }
        return res.json();
      })
      .then((res) => {
        dispatch(fetchUserSuccess(res));
      });
  };
};
