import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./index.css";
import HomeContainer from "./pages/Home/HomeContainer";

const initialState = {
  token: null,
  artists: null,
  user: null,
  tracks: null,
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <HomeContainer />
  </Provider>,
  document.getElementById("root")
);