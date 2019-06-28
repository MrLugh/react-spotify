import React, { Component } from "react";
import { Layout } from "antd";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Route } from "react-router-dom";
const { Content } = Layout;

export default class DefaultLayout extends Component<any, any> {
  render() {
    const { component: Component, ...params } = this.props;

    return (
      <Route
        {...params}
        render={(matchProps) => {
          return (
            <Layout className="layout-main">
              <Sidebar />
              <Layout className="layout-content">
                <Content>
                  <Component {...matchProps} />
                </Content>
                <Header />
              </Layout>
            </Layout>
          );
        }}
      />
    );
  }
}
