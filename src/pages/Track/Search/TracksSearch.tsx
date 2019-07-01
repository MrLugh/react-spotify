import React from "react";
import { Track } from "../../../models/models";
import { TrackSearchState } from "../../../store/types/actionTypes";
import TrackItem from "./TrackItem";
import { Input, Spin, Pagination } from "antd";

interface TrackSearchProps {
  searchValue: string;
  trackSearch: TrackSearchState;
  onHandlerChange: (value: string) => void;
  onHandlerPageChange: (page: number) => void;
}

const TrackSearch: React.SFC<TrackSearchProps> = ({
  searchValue,
  trackSearch,
  onHandlerChange,
  onHandlerPageChange,
}) => {
  const renderTracks = () => {
    if (!trackSearch) {
      return "type your favorite Tracks.";
    }

    if (trackSearch.trackPending) {
      return <Spin size="small" />;
    }

    if (trackSearch.trackError) {
      return `Ups! There was a problem searching by ${searchValue}.`;
    }

    if (!trackSearch.response.tracks.items.length) {
      return "there are no results!";
    }

    return trackSearch.response.tracks.items
      .sort((a, b) => b.popularity - a.popularity)
      .map((track: Track, key: number) => <TrackItem key={key} track={track} />);
  };

  const getPageNumber = () => {
    const page = Math.ceil(
      trackSearch.response.tracks.offset / trackSearch.response.tracks.limit
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
        {trackSearch &&
          searchValue.length > 0 &&
          !trackSearch.trackPending &&
          !trackSearch.trackError &&
          trackSearch.response.tracks.items.length > 0 &&
          trackSearch.response.tracks.total >
            trackSearch.response.tracks.limit && (
            <Pagination
              simple
              defaultCurrent={getPageNumber()}
              total={trackSearch.response.tracks.total}
              onChange={onHandlerPageChange}
            />
          )}
      </div>
    </div>
  );
};

export default TrackSearch;
