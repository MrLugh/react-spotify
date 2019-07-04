import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { searchArtist, searchArtistAlbums } from "../../actions/artistActions";
import { setPlayer } from "../../actions/playerActions";
import Artist from "../../components/Artist";

const mapStateToProps = (state: any) => {
  return {
    token: state.token.token,
    artistSearch: state.artist,
    artistAlbums: state.artistAlbums,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      searchArtist,
      searchArtistAlbums,
      setPlayer,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Artist));
