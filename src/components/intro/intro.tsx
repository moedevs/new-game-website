import * as React from "react";
import Flickity from "react-flickity-component";
import "flickity-imagesloaded";
import { ReactNode } from "react";

/**
 * Flickity react typings seem a little buggy so we're ignoring
 */
export const SiteIntro = ({ children }: { children: ReactNode }) => (
  <div className="intro">
    {/*
    // @ts-ignore */}
    <Flickity
      className="twitter-slides main-carousel"
      options={{
        cellAlign: "center",
        freeScroll: true,
        setGallerySize: true,
        imagesLoaded: true,
        pageDots: false,
        contain: true
      }}
    >
      {children}
    </Flickity>
  </div>
);
