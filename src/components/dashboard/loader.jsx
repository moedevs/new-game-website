import * as React from "react";
import * as B from "bloomer";
import aobaLoader from "../../loaders/aobaload.gif";
import { thumbnailProxy } from "../../utils";

export const AobaLoader = () =>
  <B.Card className="guild-image-card">
    <B.CardImage className="guild-image-wrapper">
      <img
        alt="guild-image"
        src={aobaLoader}
        className="guild-image"
      />
    </B.CardImage>
    <B.CardContent className="image-content">
      <B.Level>
        <B.LevelItem>
          <B.Subtitle>
            Loading...
          </B.Subtitle>
        </B.LevelItem>
      </B.Level>
    </B.CardContent>
  </B.Card>;

