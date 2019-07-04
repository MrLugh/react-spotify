import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import artistsReducer from "./artistsReducer";
import artistReducer from "./artistReducer";
import artistAlbumsReducer from "./artistAlbumsReducer";
import trackReducer from "./trackReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
  token: tokenReducer,
  user: userReducer,
  artists: artistsReducer,
  artist: artistReducer,
  tracks: trackReducer,
  artistAlbums: artistAlbumsReducer,
  player: playerReducer,
});