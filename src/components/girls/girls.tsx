import * as React from "react";

import { WithChildren } from "../../types";
import {
  Card,
  CardContent,
  Column,
  Columns,
  Content,
  Level,
  LevelLeft,
  Section
} from "bloomer";

export const girls = [
  "hifumi",
  "aoba",
  "ko",
  "yun",
  "hajime",
  "nene",
  "nene",
  "rin",
  "umiko",
  "momo",
  "naru"
];

interface GirlTitleProps {
  name: string;
  image: string;
  quote: string;
}

interface GirlProps {
  color: string;
  image: string;
  title: GirlTitleProps;
  weaknesses: string[];
  strengths: string[];
}

interface GirlList {
  name: string;
  items: string[];
}

const GirlList = ({ name, items }: GirlList) => (
  <div className="card is-size-6-mobile is-size-6-tablet is-size-5-desktop">
    <div className="card-header is-size-6-mobile">
      <div className="card-header-title">{name}</div>
    </div>
    <div className="card-content">
      <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
    </div>
  </div>
);

const GirlImage = ({ image }: { image: string }) => (
  <div className="level-item">
    <div className="icon is-large">
      <img src={image} alt="" className="image is-rounded" />
    </div>
  </div>
);

const GirlContent = ({ children }: WithChildren) => (
  <div className="card">
    <div className="card-content card is-size-5-mobile is-size-5-tablet is-size-4-desktop content">
      {children}
    </div>
  </div>
);

const GirlTitle = ({ image, name, quote }: GirlTitleProps) => (
  <Card>
    <CardContent className="card is-size-7-mobile is-size-5-tablet is-size-4-desktop">
      <Level isMobile>
        <LevelLeft className="shrink">
          {image && <GirlImage image={image} />}
          <div className="level-item no-grow shrink">
            <p className="title is-size-4-mobile">{name}</p>
          </div>
        </LevelLeft>
      </Level>
      <p className="subtitle is-size-6-mobile">{quote}</p>
    </CardContent>
  </Card>
);

export const Girl = (options: GirlProps & WithChildren) => (
  <div className="girl-section" style={{ backgroundColor: options.color }}>
    <Columns isMobile>
      <Column isSize="1/4" className="girl-image-column">
        <img src={options.image} alt="" className="image girl" />
      </Column>
      <Column className="girl-content">
        <Section>
          <Content>
            <Columns>
              <Column>
                <GirlTitle
                  image={options.title.image}
                  name={options.title.name}
                  quote={options.title.quote}
                />
                <br />
                <GirlContent>{options.children}</GirlContent>
              </Column>
              <Column>
                <GirlList name="Strengths" items={options.strengths} />
                <br />
                <GirlList name="Weaknesses" items={options.weaknesses} />
              </Column>
            </Columns>
          </Content>
        </Section>
      </Column>
    </Columns>
  </div>
);
