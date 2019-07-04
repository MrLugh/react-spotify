import React from "react";
import { ArtistAlbumsState } from "../store/types/actionTypes";
import SpinLoader from "./SpinLoader";
import { Pagination, Row, Col } from "antd";
import AlbumItem from "./AlbumItem";

interface ArtistAlbumsProps {
  artistAlbums: ArtistAlbumsState;
  onHandlerPageChange: (page: number) => void;
}

const ArtistAlbums: React.SFC<ArtistAlbumsProps> = ({
  artistAlbums,
  onHandlerPageChange,
}) => {
  const getPageNumber = () => {
    const page = Math.ceil(
      artistAlbums.response.offset / artistAlbums.response.limit
    );
    return page + 1;
  };

  const renderAlbums = () => {
    if (!artistAlbums || artistAlbums.artistAlbumsPending) {
      return <SpinLoader />;
    }

    if (artistAlbums.artistAlbumsError) {
      return <span>Ups! There was a problem searching albums.</span>;
    }

    if (!artistAlbums.response.items.length) {
      return <span>there are no results!</span>;
    }

    return (
      <div>
        <Row gutter={16}>
          {artistAlbums.response.items.map((album, key) => (
            <Col key={key} span={8}>
              <AlbumItem album={album} />
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  return (
    <div className="artist-albums-section">
      <div className="artist-albums-content">{renderAlbums()}</div>
      <div className="pagination">
        {artistAlbums &&
          !artistAlbums.artistAlbumsPending &&
          !artistAlbums.artistAlbumsError &&
          artistAlbums.response.items.length > 0 &&
          artistAlbums.response.total > artistAlbums.response.limit && (
            <Pagination
              simple
              defaultCurrent={getPageNumber()}
              total={artistAlbums.response.total}
              onChange={onHandlerPageChange}
            />
          )}
      </div>
    </div>
  );
};

export default ArtistAlbums;
