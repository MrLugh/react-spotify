import React from "react";
import {
  ArtistSearchState,
  SearchArtistType,
  SearchArtistAlbumsType,
  ArtistAlbumsState,
  SetPlayerActionType,
} from "../store/types/actionTypes";
import { RouteComponentProps } from "react-router";
import SpinLoader from "./SpinLoader";
import ArtistAlbums from "./ArtistAlbums";
import { debounce } from "lodash";
import { DEFAULT_PERSON_AVATAR_IMAGE_URL } from "../constants/api";

interface ArtistRouterProps {
  id: string;
}

interface ArtistProps extends RouteComponentProps<ArtistRouterProps> {
  token: string;
  artistSearch: ArtistSearchState;
  searchArtist: SearchArtistType;
  artistAlbums: ArtistAlbumsState;
  searchArtistAlbums: SearchArtistAlbumsType;
  searchArtistAlbumsReset: () => void;
  setPlayer: SetPlayerActionType
}

class Artist extends React.Component<ArtistProps> {
  state = { offset: 0 };

  constructor(props: any) {
    super(props);
    this.searchArtistAlbums = debounce(this.searchArtistAlbums, 500);
  }

  searchArtistAlbums() {
    if (this.props.match.params.id) {
      this.props.searchArtistAlbums(
        this.props.token,
        this.props.match.params.id,
        8,
        this.state.offset
      );
    }
  }

  componentDidMount() {
    this.props.searchArtist(this.props.token, this.props.match.params.id);
    this.searchArtistAlbums();
  }

  componentWillUnmount() {
    this.props.searchArtistAlbumsReset();
  }

  handlePageChange = (page: number) => {
    this.setState({ offset: (page - 1) * 8 }, this.searchArtistAlbums);
  };

  render() {
    if (!this.props.artistSearch || this.props.artistSearch.artistPending) {
      return <SpinLoader />;
    }

    if (this.props.artistSearch.artistError) {
      return <span>Ups! There was a problem fetching Artist.</span>;
    }

    const artist = this.props.artistSearch.response;

    const avatarUrl =
      artist.images.length > 0
        ? artist.images.sort((a, b) => b.width - a.width)[0].url
        : DEFAULT_PERSON_AVATAR_IMAGE_URL;

    return (
      <div className="content-main">
        <div className="header-page-artist">
          <div
            className="cover"
            style={{ backgroundImage: `url(${avatarUrl})` }}
          ></div>
          <h3 className="artist-title">{artist.name}</h3>
          {artist.genres.length > 0 && (
            <p className="center">{artist.genres.join(" | ")}</p>
          )}
        </div>
        <div className="content-page-artist">
          <ArtistAlbums
            artistAlbums={this.props.artistAlbums}
            onHandlerPageChange={this.handlePageChange}
            setPlayer={this.props.setPlayer}
          />
        </div>
      </div>
    );
  }
}

export default Artist;
