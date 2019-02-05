import * as React from "react";
import { Footer, Icon } from "bloomer";

export const SiteFooter = () => {
  const love =
    <Icon
      className="fa fa-heart"
      style={{ color: "red" }}
      isSize="small"
    />;
  return (
    <Footer hasTextAlign="centered" hasTextColor="grey-dark">
      <h2>Made with {love} by the <b>/r/NewGame</b> community</h2>
    </Footer>
  );
};
