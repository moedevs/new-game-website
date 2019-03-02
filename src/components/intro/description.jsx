import * as React from "react";
import { Column, Columns, Section, Subtitle, Title } from "bloomer";
import { Checklist } from "./checklist";

export const Description = () =>
  <Section className="narrow-width">
    <Columns isCentered>
      <Column>
        <Title className="title">What is this?</Title>
        <Subtitle>And who are you?</Subtitle>
        <p>
          New Game! is an anime about some of the most determined
          girls out there making games they love!

        </p>
      </Column>
      <Column>
        <Checklist/>
      </Column>
    </Columns>
  </Section>;
