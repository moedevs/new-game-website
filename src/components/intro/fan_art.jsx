import * as React from "react";
import Img from "gatsby-image";
import {
  Column,
  Columns, Section,
  Subtitle, Tag, Title
} from "bloomer";
import { anchorize, CtxFanarts, infinite, next } from "../../utils";
import { Checklist } from "./checklist";
import "./intro.scss";

export const MediaSection = () => {
  const IMAGE_WIDTH = 250;
  const SWITCH_INTERVAL = 2700;

  const fanart = React.useContext(CtxFanarts);
  const [initialArt] = fanart;
  const [currentArt, setArt] = React.useState(initialArt);

  const artIter = infinite(fanart);

  React.useEffect(() => {
    const id = setInterval(
      () => setArt(next(artIter)),
      SWITCH_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <Section className="narrow-width">
      <Columns isCentered className="media-columns">
        <Column isSize="3/4" className="media-column">
          <Title className="has-text-grey-dark">Why New Game! is absolutely the best anime</Title>
          <Checklist/>
        </Column>
      </Columns>
      <Columns isCentered>
        <Column size="3/4" className="media-column">
          <Title className="has-text-grey-dark">The cutest fanart!</Title>
          <div className="media-image-container" style={{ width: IMAGE_WIDTH }}>
            <a {...anchorize(currentArt.src)}>
              <Tag className="fanart-tag" isColor="success">
                Source
              </Tag>
            </a>
            <Img fadeIn={false} fixed={currentArt.image}/>
          </div>
        </Column>
      </Columns>
    </Section>
  );
};
