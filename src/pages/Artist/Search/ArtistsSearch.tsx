import React from "react";
import { Artist } from "../../../models/models";
import { ArtistSearchState } from "../../../store/types/actionTypes";
import { Input, Avatar, Spin, Pagination } from "antd";

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
      return "Ingresá el nombre de tu artista favorito.";
    }

    if (artistSearch.artistPending) {
      return <Spin size="small" />;
    }

    if (artistSearch.artistError) {
      return "Ups! Parece que hay un error con la búsqueda.";
    }

    if (!artistSearch.response.artists.items.length) {
      return "No hay resultados.";
    }

    return artistSearch.response.artists.items
      .sort((a, b) => b.popularity - a.popularity)
      .map((artist: Artist, key: number) => {
        const avatarUrl =
          artist.images.length > 0
            ? artist.images[0].url
            : "https://png.pngtree.com/svg/20161212/f93e57629c.svg";
        return (
          <div className="artist-card">
            <Avatar className="artist-avatar" size={156} src={avatarUrl} />
            <h3 className="artist-title">{artist.name}</h3>
          </div>
        );
      });
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
        placeholder="Escribir..."
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
