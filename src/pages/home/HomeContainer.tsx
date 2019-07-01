import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setToken } from "../../actions/tokenActions";
import { fetchUser } from "../../actions/userActions";
import { SPOTIFY } from "../../constants/api";
import SpinLoader from "../../components/SpinLoader";
import Home from "./Home";

class HomeContainer extends React.Component<any, any> {
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
      this.props.fetchUser(hashParams.access_token);
    }
  }

  render() {
    if (!this.props.token || !this.props.user) {
      return <SpinLoader />;
    }
    return <Home/>
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setToken,
      fetchUser,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
