import { FETCH_ARTISTS_SUCCESS, SearchArtistsActionTypes } from "../store/types/actionTypes";

export const artistReducer = (state = {}, action: SearchArtistsActionTypes) => {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.payload,
      };

    default:
      return state;
  }
};

export default artistReducer;
