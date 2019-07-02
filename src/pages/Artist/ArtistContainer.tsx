import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {withRouter} from 'react-router';
import { searchArtist } from "../../actions/artistActions";
import Artist from "../../components/Artist";

const mapStateToProps = (state: any) => {
    return {
      token: state.token.token,
      artistSearch: state.artist,
    };
  };
  
  const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(
      {
        searchArtist,
      },
      dispatch
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Artist));