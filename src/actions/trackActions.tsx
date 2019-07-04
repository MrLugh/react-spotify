import { TracksSearchResponse } from "../models/models";
import {
  FETCH_TRACKS_SUCCESS,
  SearchTracksActionTypes,
  SearchTracksType,
  FETCH_TRACKS_PENDING,
  FETCH_TRACKS_ERROR,
  FETCH_TRACKS_RESET,
} from "../store/types/actionTypes";
import { SPOTIFY } from "../constants/api";

export const searchTracksSuccess = (
  search: TracksSearchResponse
): SearchTracksActionTypes => {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: search,
  };
};

export const searchTracksReset = (): SearchTracksActionTypes => {
  return {
    type: FETCH_TRACKS_RESET,
  };
};

export const searchTracksPending = (): SearchTracksActionTypes => {
  return {
    type: FETCH_TRACKS_PENDING,
  };
};

export const searchTracksError = (err: Error): SearchTracksActionTypes => {
  return {
    type: FETCH_TRACKS_ERROR,
  };
};

export const searchTracks: SearchTracksType = (
  accessToken: string,
  value: string,
  limit: number = 10,
  offset: number = 0
) => {
  return (dispatch: CallableFunction) => {
    const url = `${
      SPOTIFY.api
    }/search?type=track&limit=${limit}&offset=${offset}&q=${encodeURIComponent(
      value
    )}`;
    const request = new Request(url, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
      }),
    });

    dispatch(searchTracksPending());

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
        dispatch(searchTracksSuccess(res));
      })
      .catch((err) => {
        dispatch(searchTracksError(err));
      });
  };
};
