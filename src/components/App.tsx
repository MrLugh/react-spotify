import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken } from '../actions/tokenActions';
import { fetchUser } from '../actions/userActions';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import SpinLoader from './SpinLoader';
import Dummy from './Dummy';
import UserProfile from './UserProfile';

class App extends React.Component<any, any> {

	componentDidMount() {

	  let hashParams: any = {};
	  let e, r = /([^&;=]+)=?([^&;]*)/g,
	    q = window.location.hash.substring(1);
	  while ( e = r.exec(q)) {
	    hashParams[e[1]] = decodeURIComponent(e[2]);
    }

	  if(!hashParams.access_token) {
	    window.location.href = 'https://accounts.spotify.com/authorize?client_id=62cefaf3d081421989a8124e0ce0bada&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/';
	  } else {
      this.props.setToken(hashParams.access_token);
      this.props.fetchUser(hashParams.access_token);
    }

  }


  render() {

    if (!this.props.token || !this.props.user) {
      return <SpinLoader />;
    }

    return (
      <Router>
        <Switch>
          <DefaultLayout exact path="/" component={Dummy} />
          <DefaultLayout exact path="/me" component={UserProfile} />
          <DefaultLayout exact path="/artists" component={Dummy} />
          <DefaultLayout exact path="/songs" component={Dummy} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {

  return {
    token: state.tokenReducer.token,
    user: state.userReducer.user,
  };

};

const mapDispatchToProps = (dispatch: any) => {

  return bindActionCreators({
    setToken,
    fetchUser,
  },dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
