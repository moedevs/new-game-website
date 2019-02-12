import * as React from "react";
import Img from "gatsby-image";
import { Column, Columns, Section, Tag } from "bloomer";
import { CtxFanarts, infinite, next, seconds } from "../../utils";

export const FanArt = () => {
  const IMAGE_WIDTH = 300;
  const SWITCH_INTERVAL = seconds(2.7);

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
    <Section>
      <Columns isCentered>
        <Column size="1/3">
          <div style={{ position: "relative", width: IMAGE_WIDTH }}>
            <a href={currentArt.src} target="_blank">
              <Tag
                style={{ zIndex: 2, position: "absolute", top: 0, right: 0, margin: "10px" }}
                isColor="link"
              >
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
