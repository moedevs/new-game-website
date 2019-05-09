import * as React from "react";
import { LevelItem } from "bloomer";
import Img from "gatsby-image";

const GirlImage = ({ image }) => (
  <LevelItem>
    <div className="icon is-large">
      <Img fixed={image} className="image is-rounded" />
    </div>
  </LevelItem>
);

export default  GirlImage;
