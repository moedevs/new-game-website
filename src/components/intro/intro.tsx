import * as React from "react";
import { tweets } from "./twitter/tweets";

export const SiteIntro = () =>
  <div className="intro">
    <div className="twitter-slides main-carousel">
      {tweets}
    </div>
  </div>
