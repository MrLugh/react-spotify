import React from "react";
import { Spin } from "antd";

let style = {
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    display: "flex",
    top: "0",
    left: "0",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4,
    background: "#5a5a5a5a",
  },
};

export default ({ size = "large" }) => (
  <div style={style.container}>
    <Spin size={size} />
  </div>
);
