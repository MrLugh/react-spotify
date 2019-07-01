import {
  FETCH_TRACKS_SUCCESS,
  SearchTracksActionTypes,
  FETCH_TRACKS_PENDING,
  FETCH_TRACKS_ERROR,
} from "../store/types/actionTypes";

export const trackReducer = (state = {}, action: SearchTracksActionTypes) => {
  switch (action.type) {
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        response: action.payload,
        trackPending: false,
        trackError: false,
      };

    case FETCH_TRACKS_PENDING:
      return {
        ...state,
        response: {},
        trackPending: true,
        trackError: false,
      };

    case FETCH_TRACKS_ERROR:
      return {
        ...state,
        response: {},
        trackPending: false,
        trackError: true,
      };

    default:
      return state;
  }
};

export default trackReducer;
