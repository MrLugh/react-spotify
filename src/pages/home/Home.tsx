import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import UserProfileContainer from "../User/UserProfileContainer";
import ArtistsSearchContainer from "../Artist/Search/ArtistSearchContainer";
import TracksSearchContainer from "../Track/Search/TrackSearchContainer";

interface HomeProps {}

const Home: React.SFC<HomeProps> = (props) => {
  return (
    <Router>
      <Switch>
        <DefaultLayout exact path="/" component={UserProfileContainer} />
        <DefaultLayout
          exact
          path="/artists"
          component={ArtistsSearchContainer}
        />
        <DefaultLayout exact path="/songs" component={TracksSearchContainer} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Home;
