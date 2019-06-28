import { ArtistSearch } from "../store/types/models";
import { FETCH_ARTISTS_SUCCESS, SearchArtistsActionTypes } from "../store/types/actionTypes";
import { SPOTIFY } from '../constants/api';

export const searchArtistsSuccess = (search: ArtistSearch): SearchArtistsActionTypes => {
  return {
    type: FETCH_ARTISTS_SUCCESS,
    payload: search,
  };
};

export const searchArtists = (accessToken: string, value: string, limit: number = 10, offset: number = 0) => {
  return (dispatch: CallableFunction) => {
      const url = `${SPOTIFY.api}/search?type=artist&limit${limit}&offset=${offset}&q=${encodeURIComponent(value)}`
    const request = new Request(url, {
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
        dispatch(searchArtistsSuccess(res));
      });
  };
};
