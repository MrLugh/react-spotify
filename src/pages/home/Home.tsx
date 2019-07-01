import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setToken } from "../../actions/tokenActions";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { SPOTIFY } from "../../constants/api";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import SpinLoader from "../../components/SpinLoader";
import Dummy from "../../components/Dummy";
import UserProfileContainer from "../User/UserProfileContainer";
import ArtistsSearchContainer from "../Artist/Search/ArtistSearchContainer";

class Home extends React.Component<any, any> {
  componentDidMount() {
    let hashParams: any = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href = SPOTIFY.authorize;
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  render() {
    if (!this.props.token) {
      return <SpinLoader />;
    }

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
          <DefaultLayout exact path="/songs" component={Dummy} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setToken,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
