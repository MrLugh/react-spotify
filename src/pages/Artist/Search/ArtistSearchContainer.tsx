import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchArtists } from "../../../actions/artistActions";
import {
  SearchArtistsType,
  ArtistSearchState,
} from "../../../store/types/actionTypes";
import ArtistsSearch from "./ArtistsSearch";
import { Pagination } from "antd";

interface ArtistSearchContainerProps {
  token: string;
  artistSearch: ArtistSearchState;
  searchArtists: SearchArtistsType;
}

class ArtistSearchContainer extends React.Component<
  ArtistSearchContainerProps
> {
  state = { search: "", offset: 0 };

  searchArtists() {
    if (this.state.search.length > 0) {
      this.props.searchArtists(
        this.props.token,
        this.state.search,
        8,
        this.state.offset
      );
    }
  }

  componentDidMount() {
    this.setState({ search: "", offset: 0 });
  }

  handleSearchOnChange = (search: string) => {
    this.setState({ search, offset: 0 }, this.searchArtists);
  };

  handlePageChange = (page: number) => {
    this.setState({ offset: (page - 1) * 8 }, this.searchArtists);
  };

  getPageNumber() {
    const page = Math.ceil(
      this.props.artistSearch.response.artists.offset /
        this.props.artistSearch.response.artists.limit
    );
    return page + 1;
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <ArtistsSearch
          artistSearch={this.props.artistSearch}
          onHandlerChange={this.handleSearchOnChange}
        />
        {this.props.artistSearch &&
          this.state.search.length > 0 &&
          !this.props.artistSearch.artistPending &&
          !this.props.artistSearch.artistError &&
          this.props.artistSearch.response.artists.items.length > 0 &&
          this.props.artistSearch.response.artists.total >
            this.props.artistSearch.response.artists.limit && (
            <Pagination
              className="pagination"
              simple
              defaultCurrent={this.getPageNumber()}
              total={this.props.artistSearch.response.artists.total}
              onChange={this.handlePageChange}
            />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token.token,
    artistSearch: state.artists,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      searchArtists,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistSearchContainer);
