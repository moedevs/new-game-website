import * as React from "react";
import { tweets } from "./twitter/tweets";
import Flickity from "react-flickity-component";

/**
 * Flickity react typings seem a little buggy so we're ignoring
 */
export const SiteIntro = () => (
  <div className="intro">
    {/*
    // @ts-ignore */}
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
