import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { Avatar, Button } from "antd";

class UserProfile extends React.Component<any, any> {
  state = {};

  componentDidMount() {
    this.props.fetchUser(this.props.token);
  }

  render() {
    const { user } = this.props;
    const avatarUrl =
      user.images.length > 0
        ? user.images[0].url
        : "https://png.pngtree.com/svg/20161212/f93e57629c.svg";

    return (
      <div className="content-main">
        <div className="user-profile">
          <Avatar
            className="artist-avatar me-avatar"
            size={256}
            src={avatarUrl}
          />
          <h1 className="me-title">{user.display_name}</h1>
          <Button>
            <a
              href="https://www.spotify.com/account/"
              rel="noopener noreferrer"
              target="_blank"
            >
              View account
            </a>
          </Button>
          <Button>
            <a
              href="https://www.spotify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Home
            </a>
          </Button>
          <Button>
            <a
              href="https://support.spotify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Help
            </a>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token.token,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchUser,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
