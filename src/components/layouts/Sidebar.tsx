import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import logo from "../../assets/img/cloudcial-horizontal-white.png";
import { ArtistSearchState } from "../../store/types/actionTypes";
const { Sider } = Layout;

interface RouterProps {
  id: string;
}

interface SidebarProps extends RouteComponentProps<RouterProps> {
  artistSearch: ArtistSearchState;
}

class Sidebar extends React.Component<SidebarProps> {
  state = { current: "/" };

  componentWillReceiveProps(nextProps: SidebarProps) {
    if (nextProps.match.path !== this.state.current) {
      this.setState({ current: nextProps.match.path });
    }
  }

  render() {
    return (
      <Sider className="sidebar">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="CloudCial logo" />
          </Link>
        </div>
        <Menu
          className="menu"
          theme="dark"
          mode="inline"
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="/">
            <Link to={"/home"}>
              <Icon type="home"></Icon>
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/artists">
            <Link to={"/artists"}>
              <Icon type="team"></Icon>
              <span className="nav-text">Artists</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/songs">
            <Link to={"/songs"}>
              <Icon type="notification"></Icon>
              <span className="nav-text">Songs</span>
            </Link>
          </Menu.Item>
          {this.state.current === "/artists/:id" && (
            <Menu.Item key="/artists/:id">
              <Link to={`/artists/${this.props.match.params.id}`}>
                <Icon type="user"></Icon>
                <span className="nav-text">
                  {this.props.artistSearch &&
                  !this.props.artistSearch.artistError &&
                  this.props.artistSearch.response
                    ? this.props.artistSearch.response.name
                    : "Artist Profile"}
                </span>
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    artistSearch: state.artist,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
