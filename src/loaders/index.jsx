import * as React from "react";
export const Loader = ({ media }) =>
  <div style={{
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <img src={media} alt="loader"/>
  </div>;
