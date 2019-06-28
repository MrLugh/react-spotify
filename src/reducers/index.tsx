import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";
import artistReducer from "./artistReducer";

export default combineReducers({
  token: tokenReducer,
  user: userReducer,
  artists: artistReducer,
});
