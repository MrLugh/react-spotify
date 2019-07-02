import {
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_PENDING,
  FETCH_ARTISTS_ERROR,
  SearchArtistsActionTypes,
} from "../store/types/actionTypes";

export const artistsReducer = (
  state = {},
  action: SearchArtistsActionTypes
) => {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        response: action.payload,
        artistsPending: false,
        artistsError: false,
      };

    case FETCH_ARTISTS_PENDING:
      return {
        ...state,
        response: {},
        artistsPending: true,
        artistsError: false,
      };

    case FETCH_ARTISTS_ERROR:
      return {
        ...state,
        response: {},
        artistsPending: false,
        artistsError: true,
      };

    default:
      return state;
  }
};

export default artistsReducer;
