import * as React from "react";
import { GithubCorner } from "./github_corner";
import { Column, Columns, Icon } from "bloomer";

export const LandingPanel = () =>
  <div className="landing">
    <div className="overlay"/>
    <div className="banner-container">
      <GithubCorner/>
    </div>
    <div className="arrow has-text-white">
      <Icon className="fa fa-arrow-down"/>
    </div>
    <Columns>
      <Column>
        <div className="is-flex banner-text-container">

        </div>
      </Column>
    </Columns>
  </div>;
