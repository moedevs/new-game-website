import * as React from "react";
import { tweets } from "./twitter/tweets";
import Flickity from "react-flickity-component";

export const SiteIntro = () => (
  <div className="intro">
    <Flickity
      className="twitter-slides main-carousel"
      options={{
        cellAlign: "center",
        freeScroll: true
      }}
    >
      {tweets}
    </Flickity>
  </div>
);
