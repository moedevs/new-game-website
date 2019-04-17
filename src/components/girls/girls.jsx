import * as React from "react";
import Img from "gatsby-image";
import {
  Card,
  CardContent, CardHeader, CardHeaderTitle,
  Column,
  Columns,
  Content, Hero,
  Level, LevelItem,
  LevelLeft, LevelRight,
  Section, Tag
} from "bloomer";
import "./girls.scss";

const GirlList = ({ name, items }) => (
  <div className="card is-size-6-mobile is-size-6-tablet is-size-5-desktop">
    <CardHeader className="is-size-6-mobile">
      <CardHeaderTitle className="girl-card-header-title">{name}</CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <ul className="girl-list">
        {items.map(item => <li className="girl-content-color" key={item}>{item}</li>)}
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

const GirlContent = ({ children, color, role }) => (
  <Card className="card">
    <div className="character-header" style={{ backgroundColor: color }}>
      <h1>{role}</h1>
    </div>
    <CardContent className="girl-content is-size-5-mobile is-size-5-tablet content">
      {children}
    </CardContent>
  </Card>
);

const GirlTitle = ({ thumbnail, name, quote, japanese }) => (
  <Card>
    <CardContent className="card is-size-7-mobile is-size-5-tablet is-size-4-desktop">
      <Level>
        <LevelLeft className="shrink">
          {thumbnail && <GirlImage image={thumbnail}/>}
          <div className="level-item no-grow shrink">
            <p className="girl-title title is-size-4-tablet is-size-4-mobile">{name}</p>
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

export const Girl = (options) =>
  <div className="girl-section" style={{ backgroundColor: options.color }}>
    <Columns isMobile className="narrow-width">
      <Column isSize="1/4" className="girl-image-column">
        {/*
         * We have to use <img> here instead of <Img> because for SOME reason
         * the girls images don't seem to work with gatsby-image. They're
         * disappearing when we switch to <1024px width. Feel free to try it
         * out with gatsby-image but I couldn't make it work lol @Xetera
         */}
        <img srcSet={options.image.srcSetWebp} alt="Best girl" className="image girl"/>
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
                  japanese={options.japanese}
                />
                <br/>
                <GirlContent color={options.color} role={options.role}>
                  {options.children}
                </GirlContent>
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
  </div>;

export const MarkdownGirl = (props) => {
  const { html, ...content } = props;
  return (
    <Girl {...content}>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </Girl>
  );
};
