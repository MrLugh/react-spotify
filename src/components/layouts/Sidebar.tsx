import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import logo from "../../assets/img/cloudcial-horizontal-white.png";
const { Sider } = Layout;

interface SidebarProps {}

const Sidebar: React.SFC<SidebarProps> = (props) => {
  return (
    <Sider className="sidebar">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="CloudCial logo" />
        </Link>
      </div>
      <Menu className="menu" theme="dark" mode="inline">
        <Menu.Item key="artists">
          <Link to={"/artists"}>
            <Icon type="team"></Icon>
            <span className="nav-text">Artists</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="songs">
          <Link to={"/songs"}>
            <Icon type="notification"></Icon>
            <span className="nav-text">Songs</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
