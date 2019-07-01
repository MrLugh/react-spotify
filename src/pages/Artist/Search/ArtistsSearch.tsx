import React from "react";
import { Artist } from "../../../models/models";
import { ArtistSearchState } from "../../../store/types/actionTypes";
import { Input, Row, Col, Avatar, Spin } from "antd";

interface ArtistSearchProps {
  artistSearch: ArtistSearchState;
  onHandlerChange: (value: string) => void;
}

const ArtistSearch: React.SFC<ArtistSearchProps> = ({
  artistSearch,
  onHandlerChange,
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
          <Col key={key} span={6}>
            <div className="artist-card">
              
                <Avatar className="artist-avatar" size={192} src={avatarUrl} />
                <h3 className="artist-title">{artist.name}</h3>
              
            </div>
          </Col>
        );
      });
  };

  return (
    <div style={{height: 'calc(100% - 64px)'}}>
      <Input
        className="search"
        placeholder="Escribir..."
        onChange={(e: any) => onHandlerChange(e.target.value)}
      />
      <div className="content-main">
        <Row type="flex" justify="start" align="top" gutter={16}>
          {renderArtists()}
        </Row>
      </div>
    </div>
  );
};

export default ArtistSearch;
