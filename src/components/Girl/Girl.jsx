import * as React from "react";
import {
  Column,
  Columns,
  Content,
  Section
} from "bloomer";
import GirlList from "./GirlList/GirlList";
import GirlContent from "./GirlContent/GirlContent";
import GirlTitleText from "./GirlTitle/GirlTitle";
import { GirlImageColumn, GirlSection } from "./styled";

export const Girl = (options) =>
  <GirlSection className="girl-section" style={{ backgroundColor: options.color }}>
    <Columns isMobile className="narrow-width">
      <GirlImageColumn isSize="1/4">
        {/*
         * We have to use <img> here instead of <Img> because for SOME reason
         * the girls images don't seem to work with gatsby-image. They're
         * disappearing when we switch to <1024px width. Feel free to try it
         * out with gatsby-image but I couldn't make it work lol @Xetera
         */}
        <img srcSet={options.image.srcSetWebp} alt="Best girl" className="image girl" />
      </GirlImageColumn>
      <Column className="girl-content">
        <Section>
          <Content>
            <Columns>
              <Column>
                <GirlTitleText
                  thumbnail={options.thumbnail}
                  name={options.name}
                  quote={options.quote}
                  japanese={options.japanese}
                />
                <br />
                <GirlContent color={options.color} role={options.role}>
                  {options.children}
                </GirlContent>
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
  </GirlSection>;

export const MarkdownGirl = (props) => {
  const { html, ...content } = props;
  return (
    <Girl {...content}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Girl>
  );
};

export default Girl;
