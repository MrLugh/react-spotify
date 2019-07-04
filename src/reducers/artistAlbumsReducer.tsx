import {
  FETCH_ARTIST_ALBUMS_SUCCESS,
  FETCH_ARTIST_ALBUMS_PENDING,
  FETCH_ARTIST_ALBUMS_ERROR,
  SearchArtistAlbumsActionTypes,
} from "../store/types/actionTypes";

export const artistAlbumsReducer = (
  state = {},
  action: SearchArtistAlbumsActionTypes
) => {
  switch (action.type) {
    case FETCH_ARTIST_ALBUMS_SUCCESS:
      return {
        ...state,
        response: action.payload,
        artistAlbumsPending: false,
        artistAlbumsError: false,
      };

    case FETCH_ARTIST_ALBUMS_PENDING:
      return {
        ...state,
        response: {},
        artistAlbumsPending: true,
        artistAlbumsError: false,
      };

    case FETCH_ARTIST_ALBUMS_ERROR:
      return {
        ...state,
        response: {},
        artistAlbumsPending: false,
        artistAlbumsError: true,
      };

    default:
      return state;
  }
};

export default artistAlbumsReducer;
