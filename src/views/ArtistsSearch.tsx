import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchArtists } from "../actions/artistActions";
import { Input } from "antd";

class ArtistsSearch extends React.Component<any, any> {
  state = {};

  onChange(search: string) {
    this.props.searchArtists(this.props.token, search);
  }

  render() {

    const { artistSearch } = this.props;

    console.log(artistSearch);

    return (
      <div>
        <Input className="search" placeholder="Escribir..." onChange={(e: any) => this.onChange(e.target.value)} />
        <div className="content-main"></div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token.token,
    artistSearch: state.artists.artists
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    searchArtists
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsSearch);
