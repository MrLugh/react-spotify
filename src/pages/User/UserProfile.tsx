import React from "react";
import { UserState } from "../../store/types/actionTypes";
import { Avatar, Button } from "antd";
import SpinLoader from "../../components/SpinLoader";
import { DEFAULT_PERSON_AVATAR_IMAGE_URL } from "../../constants/api";

interface UserProfileProps {
  user: UserState;
}

const UserProfile: React.SFC<UserProfileProps> = ({ user }) => {
  if (!user || user.userPending) {
    return <SpinLoader />;
  }

  if (user.userError) {
    return <span>Ups! Parece que hay un error recuperando el profile.</span>;
  }

  const avatarUrl =
    user.response.images.length > 0
      ? user.response.images[0].url
      : DEFAULT_PERSON_AVATAR_IMAGE_URL;

  return (
    <div className="content-main">
      <div className="content-page-profile">
        <Avatar
          className="avatar artist-avatar me-avatar"
          size={256}
          src={avatarUrl}
        />
        <h1 className="me-title">{user.response.display_name}</h1>
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
};

export default UserProfile;
