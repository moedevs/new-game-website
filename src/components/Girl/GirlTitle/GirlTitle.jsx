import * as React from "react";
import { Card, CardContent, Level, LevelItem, LevelLeft, LevelRight } from "bloomer";
import { GirlTitleText } from "./styled";
import GirlImage from "../GirlImage/GirlImage";

const GirlTitle = ({ thumbnail, name, quote, japanese }) => (
  <Card>
    <CardContent className="card is-size-7-mobile is-size-5-tablet is-size-4-desktop">
      <Level>
        <LevelLeft className="shrink">
          {thumbnail && <GirlImage image={thumbnail} />}
          <div className="level-item no-grow shrink">
            <GirlTitleText className="is-size-4-tablet is-size-4-mobile">{name}</GirlTitleText>
          </div>
        </LevelLeft>
        {japanese &&
        <LevelRight>
          <LevelItem>
            <p className="is-size-5-mobile girl-japanese has-text-grey-light">{japanese}</p>
          </LevelItem>
        </LevelRight>}
      </Level>
      <p className="subtitle is-size-6-mobile girl-content-color">{quote}</p>
    </CardContent>
  </Card>
);

export default GirlTitle;
