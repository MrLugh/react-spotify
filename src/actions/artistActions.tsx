import { ArtistSearchResponse } from "../models/models";
import {
  FETCH_ARTISTS_SUCCESS,
  SearchArtistsActionTypes,
  SearchArtistsType,
  FETCH_ARTISTS_PENDING,
  FETCH_ARTISTS_ERROR,
} from "../store/types/actionTypes";
import { SPOTIFY } from "../constants/api";

export const searchArtistsSuccess = (
  search: ArtistSearchResponse
): SearchArtistsActionTypes => {
  return {
    type: FETCH_ARTISTS_SUCCESS,
    payload: search,
  };
};

export const searchArtistsPending = (): SearchArtistsActionTypes => {
  return {
    type: FETCH_ARTISTS_PENDING,
  };
};

export const searchartistError = (err: Error): SearchArtistsActionTypes => {
  return {
    type: FETCH_ARTISTS_ERROR,
  };
};

export const searchArtists: SearchArtistsType = (
  accessToken: string,
  value: string,
  limit: number = 10,
  offset: number = 0
) => {
  return (dispatch: CallableFunction) => {
    const url = `${
      SPOTIFY.api
    }/search?type=artist&limit=${limit}&offset=${offset}&q=${encodeURIComponent(
      value
    )}`;
    const request = new Request(url, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
      }),
    });

    dispatch(searchArtistsPending());

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
        dispatch(searchArtistsSuccess(res));
      }).catch(err => {
        dispatch(searchartistError(err));
      });
  };
};
