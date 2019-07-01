import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Dummy from "../../components/Dummy";
import UserProfileContainer from "../User/UserProfileContainer";
import ArtistsSearchContainer from "../Artist/Search/ArtistSearchContainer";
import TracksSearchContainer from "../Track/Search/TrackSearchContainer";

class Home extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <Switch>
          <DefaultLayout exact path="/" component={Dummy} />
          <DefaultLayout exact path="/me" component={UserProfileContainer} />
          <DefaultLayout
            exact
            path="/artists"
            component={ArtistsSearchContainer}
          />
          <DefaultLayout
            exact
            path="/songs"
            component={TracksSearchContainer}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Home;
