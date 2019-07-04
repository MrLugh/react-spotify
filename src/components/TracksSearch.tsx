import React from "react";
import { Track } from "../models/models";
import { TracksSearchState, SetPlayerActionType } from "../store/types/actionTypes";
import TrackItem from "./TrackItem";
import { Input, Pagination } from "antd";
import SpinLoader from "./SpinLoader";

interface TracksSearchProps {
  searchValue: string;
  tracksSearch: TracksSearchState;
  setPlayer: SetPlayerActionType;
  onHandlerChange: (value: string) => void;
  onHandlerPageChange: (page: number) => void;
}

const TrackSearch: React.SFC<TracksSearchProps> = ({
  searchValue,
  tracksSearch,
  setPlayer,
  onHandlerChange,
  onHandlerPageChange,
}) => {
  const renderTracks = () => {
    if (!tracksSearch) {
      return "type your favorite Tracks.";
    }

    if (tracksSearch.tracksPending) {
      return <SpinLoader />;
    }

    if (tracksSearch.tracksError) {
      return `Ups! There was a problem searching by ${searchValue}.`;
    }

    if (!tracksSearch.response.tracks.items.length) {
      return "there are no results!";
    }

    return tracksSearch.response.tracks.items
      .sort((a, b) => b.popularity - a.popularity)
      .map((track: Track, key: number) => <TrackItem key={key} track={track} setPlayer={setPlayer}/>);
  };

  const getPageNumber = () => {
    const page = Math.ceil(
      tracksSearch.response.tracks.offset / tracksSearch.response.tracks.limit
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
      <div className="content-page-tracks">{renderTracks()}</div>
      <div className="pagination">
        {tracksSearch &&
          searchValue.length > 0 &&
          !tracksSearch.tracksPending &&
          !tracksSearch.tracksError &&
          tracksSearch.response.tracks.items.length > 0 &&
          tracksSearch.response.tracks.total >
            tracksSearch.response.tracks.limit && (
            <Pagination
              simple
              defaultCurrent={getPageNumber()}
              total={tracksSearch.response.tracks.total}
              onChange={onHandlerPageChange}
            />
          )}
      </div>
    </div>
  );
};

export default TrackSearch;
