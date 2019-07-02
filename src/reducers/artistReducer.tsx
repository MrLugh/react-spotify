import {
  FETCH_ARTIST_SUCCESS,
  FETCH_ARTIST_PENDING,
  FETCH_ARTIST_ERROR,
  SearchArtistsActionTypes,
} from "../store/types/actionTypes";

export const artistReducer = (state = {}, action: SearchArtistsActionTypes) => {
  switch (action.type) {
    case FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        response: action.payload,
        artistPending: false,
        artistError: false,
      };

    case FETCH_ARTIST_PENDING:
      return {
        ...state,
        response: {},
        artistPending: true,
        artistError: false,
      };

    case FETCH_ARTIST_ERROR:
      return {
        ...state,
        response: {},
        artistPending: false,
        artistError: true,
      };

    default:
      return state;
  }
};

export default artistReducer;
