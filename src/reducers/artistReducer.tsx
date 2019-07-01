import {
  FETCH_ARTISTS_SUCCESS,
  SearchArtistsActionTypes,
  FETCH_ARTISTS_PENDING,
  FETCH_ARTISTS_ERROR,
} from "../store/types/actionTypes";

export const artistReducer = (state = {}, action: SearchArtistsActionTypes) => {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        response: action.payload,
        artistPending: false,
        artistError: false,
      };

    case FETCH_ARTISTS_PENDING:
      return {
        ...state,
        response: {},
        artistPending: true,
        artistError: false,
      };

    case FETCH_ARTISTS_ERROR:
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
