import * as React from "react";
import Img from "gatsby-image";
import {
  Card,
  CardContent, CardHeader,
  CardHeaderTitle, Column,
  Columns, Section,
  Subtitle, Tag
} from "bloomer";
import { anchorize, CtxFanarts, infinite, next, seconds } from "../../utils";

export const FanArt = () => {
  const IMAGE_WIDTH = 250;
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

  const fanartCard =
    <Card>
      <CardHeader>
        <CardHeaderTitle>
          <h1>Cutest Fanarts!</h1>
        </CardHeaderTitle>
      </CardHeader>
      <CardContent>
        <Subtitle>Hundreds of adorable art made by dedicated fans</Subtitle>
      </CardContent>
    </Card>;

  return (
    <Section className="narrow-width">
      <Columns isCentered>
        <Column isSize="2/3">
          {fanartCard}
        </Column>
        <Column size="1/3" style={{ padding: 0 }}>
          <div>
            <div style={{ position: "relative", width: IMAGE_WIDTH, margin: "10px auto" }}>
              <a {...anchorize(currentArt.src)}>
                <Tag className="fanart-tag" isColor="link">
                  Source
                </Tag>
              </a>
              <Img fadeIn={false} fixed={currentArt.image}/>
            </div>
          </div>
        </Column>
      </Columns>
    </Section>
  );
};
