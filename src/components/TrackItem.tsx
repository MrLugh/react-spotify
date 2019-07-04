import React from "react";
import { Track } from "../models/models";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { DEFAULT_ALBUM_AVATAR_IMAGE_URL } from "../constants/api";

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.SFC<TrackItemProps> = ({ track }) => {
  const avatarUrl =
    track.album.images.length > 0
      ? track.album.images.sort((a, b) => a.width - b.width)[0].url
      : DEFAULT_ALBUM_AVATAR_IMAGE_URL;

  const artist = track.artists[0];

  return (
    <div className="card track-card">
      <div className="track-card-image">
        <Avatar
          shape="square"
          className="avatar track-avatar"
          size={156}
          src={avatarUrl}
        />
        <div>
          <h3 className="track-title">{track.name}</h3>
          <ul className="track-stats">
            <li>{track.popularity} popularity</li>
            <li>
              Artist <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
            </li>
            <li>Album {track.album.name}</li>
            <li>track number {track.track_number}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
