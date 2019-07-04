import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import artistsReducer from "./artistsReducer";
import artistReducer from "./artistReducer";
import artistAlbumsReducer from "./artistAlbumsReducer";
import trackReducer from "./trackReducer";

export default combineReducers({
  token: tokenReducer,
  user: userReducer,
  artists: artistsReducer,
  artist: artistReducer,
  tracks: trackReducer,
  artistAlbums: artistAlbumsReducer,
});