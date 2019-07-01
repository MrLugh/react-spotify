import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchTracks } from "../../../actions/trackActions";
import {
  SearchTracksType,
  TrackSearchState,
} from "../../../store/types/actionTypes";
import TracksSearch from "./TracksSearch";

interface TrackSearchContainerProps {
  token: string;
  trackSearch: TrackSearchState;
  searchTracks: SearchTracksType;
}

class TrackSearchContainer extends React.Component<TrackSearchContainerProps> {
  state = { search: "", offset: 0 };

  searchTracks() {
    if (this.state.search.length > 0) {
      this.props.searchTracks(
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
    this.setState({ search, offset: 0 }, this.searchTracks);
  };

  handlePageChange = (page: number) => {
    this.setState({ offset: (page - 1) * 8 }, this.searchTracks);
  };

  render() {
    return (
      <TracksSearch
        searchValue={this.state.search}
        trackSearch={this.props.trackSearch}
        onHandlerChange={this.handleSearchOnChange}
        onHandlerPageChange={this.handlePageChange}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token.token,
    trackSearch: state.tracks,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      searchTracks,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackSearchContainer);
