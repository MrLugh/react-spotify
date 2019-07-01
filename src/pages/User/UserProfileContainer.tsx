import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import UserProfile from "./UserProfile";
import { UserActionType, UserState } from "../../store/types/actionTypes";

interface UserProfileContainerProps {
  token: string;
  user: UserState;
  fetchUser: UserActionType;
}

class UserProfileContainer extends React.Component<UserProfileContainerProps> {
  state = {};

  componentDidMount() {
    this.props.fetchUser(this.props.token);
  }

  render() {
    return <UserProfile user={this.props.user} />;
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token.token,
    user: state.user,
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
)(UserProfileContainer);
