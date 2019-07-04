import React from "react";
import { Artist } from "../models/models";
import { Link } from "react-router-dom";
import { Avatar, Button } from "antd";
import { DEFAULT_PERSON_AVATAR_IMAGE_URL } from "../constants/api";

interface ArtistItemProps {
  artist: Artist;
}

const ArtistItem: React.SFC<ArtistItemProps> = ({ artist }) => {
  const avatarUrl =
    artist.images.length > 0
      ? artist.images.sort((a, b) => a.width - b.width)[0].url
      : DEFAULT_PERSON_AVATAR_IMAGE_URL;

  return (
    <div className="card artist-card">
      <div className="artist-card-image">
        <Avatar className="avatar artist-avatar" size={156} src={avatarUrl} />
        <div>
          <h3 className="artist-title">{artist.name}</h3>
          <ul className="artist-stats">
            <li>{artist.followers.total} followers</li>
            <li>{artist.popularity} popularity</li>
            {artist.genres.length > 0 && (
              <li>Genres {artist.genres.join(" | ")}</li>
            )}
          </ul>
          <Link to={`/artists/${artist.id}`}>
            <Button type="link">View Profile!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistItem;
