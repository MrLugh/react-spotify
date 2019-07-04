import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchTracks } from "../../../actions/trackActions";
import { setPlayer } from "../../../actions/playerActions";
import {
  SearchTracksType,
  TracksSearchState,
  SetPlayerActionType,
} from "../../../store/types/actionTypes";
import TracksSearch from "../../../components/TracksSearch";
import { debounce } from "lodash";

interface TracksSearchContainerProps {
  token: string;
  trackSearch: TracksSearchState;
  searchTracks: SearchTracksType;
  setPlayer: SetPlayerActionType;
}

class TrackSearchContainer extends React.Component<TracksSearchContainerProps> {
  state = { search: "", offset: 0 };

  constructor(props: TracksSearchContainerProps) {
    super(props);
    this.searchTracks = debounce(this.searchTracks, 500);
  }  

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
        tracksSearch={this.props.trackSearch}
        onHandlerChange={this.handleSearchOnChange}
        onHandlerPageChange={this.handlePageChange}
        setPlayer={this.props.setPlayer}
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
      setPlayer,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackSearchContainer);
