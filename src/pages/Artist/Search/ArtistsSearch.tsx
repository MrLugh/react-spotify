import React from "react";
import { Artist } from "../../../models/models";
import { ArtistSearchState } from "../../../store/types/actionTypes";
import ArtistItem from "./ArtistItem";
import { Input, Spin, Pagination } from "antd";

interface ArtistSearchProps {
  searchValue: string;
  artistSearch: ArtistSearchState;
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

    if (artistSearch.artistPending) {
      return <Spin size="small" />;
    }

    if (artistSearch.artistError) {
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
          !artistSearch.artistPending &&
          !artistSearch.artistError &&
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
