import React from "react";
import { Artist } from "../../../models/models";
import { ArtistsSearchState } from "../../../store/types/actionTypes";
import ArtistItem from "./ArtistItem";
import { Input, Pagination } from "antd";
import SpinLoader from "../../../components/SpinLoader";

interface ArtistSearchProps {
  searchValue: string;
  artistSearch: ArtistsSearchState;
  onHandlerChange: (value: string) => void;
  onHandlerPageChange: (page: number) => void;
}

const ArtistSearch: React.SFC<ArtistSearchProps> = ({
  searchValue,
  artistSearch,
  onHandlerChange,
  onHandlerPageChange,
}) => {
  const renderArtists = () => {
    if (!artistSearch) {
      return "type your favorite Artists.";
    }

    if (artistSearch.artistsPending) {
      return <SpinLoader />;
    }

    if (artistSearch.artistsError) {
      return `Ups! There was a problem searching by ${searchValue}.`;
    }

    if (!artistSearch.response.artists.items.length) {
      return "there are no results!";
    }

    return artistSearch.response.artists.items
      .sort((a, b) => b.popularity - a.popularity)
      .map((artist: Artist, key: number) => <ArtistItem key={key} artist={artist} />);
  };

  const getPageNumber = () => {
    const page = Math.ceil(
      artistSearch.response.artists.offset / artistSearch.response.artists.limit
    );
    return page + 1;
  };

  return (
    <div className="content-main">
      <Input
        value={searchValue}
        className="search"
        placeholder="Search..."
        onChange={(e: any) => onHandlerChange(e.target.value)}
      />
      <div className="content-page-artists">{renderArtists()}</div>
      <div className="pagination">
        {artistSearch &&
          searchValue.length > 0 &&
          !artistSearch.artistsPending &&
          !artistSearch.artistsError &&
          artistSearch.response.artists.items.length > 0 &&
          artistSearch.response.artists.total >
            artistSearch.response.artists.limit && (
            <Pagination
              simple
              defaultCurrent={getPageNumber()}
              total={artistSearch.response.artists.total}
              onChange={onHandlerPageChange}
            />
          )}
      </div>
    </div>
  );
};

export default ArtistSearch;
