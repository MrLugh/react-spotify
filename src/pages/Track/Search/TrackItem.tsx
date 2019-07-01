import React from "react";
import { Track } from "../../../models/models";
import { Link } from "react-router-dom";
import { Avatar, Button } from "antd";

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.SFC<TrackItemProps> = ({ track }) => {
  const avatarUrl =
    track.album.images.length > 0
      ? track.album.images[0].url
      : "https://png.pngtree.com/svg/20161212/f93e57629c.svg";

  return (
    <div className="track-card">
      <div className="track-card-image">
        <Avatar
          shape="square"
          className="track-avatar"
          size={156}
          src={avatarUrl}
        />
        <div>
          <h3 className="track-title">{track.name}</h3>
          <ul className="track-stats">
            <li>{track.popularity} popularity</li>
            <li>
              Artist{" "}
              <Link to={`/artists/${track.artists[0].id}`}>
                <Button type="link">{track.artists[0].name}</Button>
              </Link>
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
