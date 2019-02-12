import * as React from "react";
import Img from "gatsby-image";
import {
  Card,
  CardContent, CardHeader, CardHeaderTitle,
  Column,
  Columns,
  Content,
  Level, LevelItem,
  LevelLeft, LevelRight,
  Section, Tag
} from "bloomer";

const GirlList = ({ name, items }) => (
  <div className="card is-size-6-mobile is-size-6-tablet is-size-5-desktop">
    <CardHeader className="is-size-6-mobile">
      <CardHeaderTitle>{name}</CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </CardContent>
  </div>
);

const GirlImage = ({ image }) => (
  <LevelItem>
    <div className="icon is-large">
      <Img fixed={image} className="image is-rounded"/>
    </div>
  </LevelItem>
);

const GirlContent = ({ children }) => (
  <Card className="card">
    <CardContent className="is-size-5-mobile is-size-5-tablet is-size-4-desktop content">
      {children}
    </CardContent>
  </Card>
);

const GirlTitle = ({ thumbnail, name, quote, role }) => (
  <Card>
    <CardContent className="card is-size-7-mobile is-size-5-tablet is-size-4-desktop">
      <Level isMobile>
        <LevelLeft className="shrink">
          {thumbnail && <GirlImage image={thumbnail}/>}
          <div className="level-item no-grow shrink">
            <p className="title is-size-4-mobile">{name}</p>
          </div>
        </LevelLeft>
        {role && <LevelRight>
          <Tag  isColor="info" className="shrink no-grow">{role}</Tag>
        </LevelRight>}
      </Level>
      <p className="subtitle is-size-6-mobile">{quote}</p>
    </CardContent>
  </Card>
);

export const Girl = (options) => (
  <div className="girl-section" style={{ backgroundColor: options.color }}>
    <Columns isMobile className="narrow-width">
      <Column isSize="1/4" className="girl-image-column">
        <img src={options.image.srcWebp} alt="" className="image girl"/>
      </Column>
      <Column className="girl-content">
        <Section>
          <Content>
            <Columns>
              <Column>
                <GirlTitle
                  thumbnail={options.thumbnail}
                  name={options.name}
                  quote={options.quote}
                  role={options.role}
                />
                <br/>
                <GirlContent>{options.children}</GirlContent>
              </Column>
              <Column>
                <GirlList name="Strengths" items={options.strengths}/>
                <br/>
                <GirlList name="Weaknesses" items={options.weaknesses}/>
              </Column>
            </Columns>
          </Content>
        </Section>
      </Column>
    </Columns>
  </div>
);

export const MarkdownGirl = (props) => {
  const { html, ...content } = props;
  return (
    <Girl {...content}>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </Girl>
  );
};
