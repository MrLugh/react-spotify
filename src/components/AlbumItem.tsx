import React from "react";
import { Album } from "../models/models";
import { Avatar, Button } from "antd";
import { DEFAULT_ALBUM_AVATAR_IMAGE_URL } from "../constants/api";
import { SetPlayerActionType } from "../store/types/actionTypes";

interface AlbumItemProps {
  album: Album;
  setPlayer: SetPlayerActionType
}

const AlbumItem: React.SFC<AlbumItemProps> = ({ album, setPlayer }) => {
  const avatarUrl =
    album.images.length > 0
      ? album.images.sort((a, b) => b.width - a.width)[0].url
      : DEFAULT_ALBUM_AVATAR_IMAGE_URL;

  return (
    <div className="card album-card">
      <div className="album-card-image">
        <Avatar
          shape="square"
          className="avatar album-avatar"
          size={156}
          src={avatarUrl}
        />
      </div>
      <div className="album-card-info">
        <h3 className="album-title">{album.name}</h3>
        <ul className="album-stats">
          <li>{album.release_date}</li>
          <li>Tracks {album.total_tracks}</li>
          <li>{album.type}</li>
          <li><Button onClick={() => setPlayer(album.uri)}>Play album</Button></li>
        </ul>
      </div>
    </div>
  );
};

export default AlbumItem;
