import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchArtists } from "../../../actions/artistActions";
import {
  SearchArtistsType,
  ArtistSearchState,
} from "../../../store/types/actionTypes";
import ArtistsSearch from "./ArtistsSearch";
import { debounce } from "lodash";

interface ArtistSearchContainerProps {
  token: string;
  artistSearch: ArtistSearchState;
  searchArtists: SearchArtistsType;
}

class ArtistSearchContainer extends React.Component<
  ArtistSearchContainerProps
> {
  state = { search: "", offset: 0 };

  constructor(props: ArtistSearchContainerProps) {
    super(props);
    this.searchArtists = debounce(this.searchArtists, 500);
  }

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

  render() {
    return (
      <ArtistsSearch
        searchValue={this.state.search}
        artistSearch={this.props.artistSearch}
        onHandlerChange={this.handleSearchOnChange}
        onHandlerPageChange={this.handlePageChange}
      />
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
