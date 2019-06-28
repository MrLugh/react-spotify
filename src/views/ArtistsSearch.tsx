import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Input } from "antd";

class ArtistsSearch extends React.Component<any, any> {
  state = {};

  render() {
    return (
      <div>
        <Input className="search" placeholder="Escribir..." />
        <div className="content-main"></div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token.token,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsSearch);
