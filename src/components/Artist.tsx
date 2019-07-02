import React from "react";
import {
  ArtistSearchState,
  SearchArtistType,
} from "../store/types/actionTypes";
import { RouteComponentProps } from "react-router";
import SpinLoader from "./SpinLoader";

interface ArtistRouterProps {
  id: string;
}

interface ArtistProps extends RouteComponentProps<ArtistRouterProps> {
  token: string;
  artistSearch: ArtistSearchState;
  searchArtist: SearchArtistType;
}

class Artist extends React.Component<ArtistProps> {
  componentDidMount() {
    this.props.searchArtist(this.props.token, this.props.match.params.id);
  }

  render() {
    if (!this.props.artistSearch || this.props.artistSearch.artistPending) {
      return <SpinLoader />;
    }

    if (this.props.artistSearch.artistError) {
      return `Ups! There was a problem fetching Artist.`;
    }

    const artist = this.props.artistSearch.response;

    const avatarUrl =
    artist.images.length > 0
      ? artist.images.sort((a, b) => b.width - a.width)[0].url
      : "https://png.pngtree.com/svg/20161212/f93e57629c.svg";

    return (
      <div className="content-main">
        <div className="header-page-artist">
          <div className="cover" style={{backgroundImage:`url(${avatarUrl})`}}></div>
        </div>
        <div className="content-page-artist">Artist</div>
      </div>
    );
  }
}

export default Artist;
