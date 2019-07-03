import * as React from "react";
import { Column, Columns, Section, Title } from "bloomer";
import { Checklist } from "./checklist";
import image from "../../../content/images/late.webm";

export const Description = () => (
  <Section className="narrower-width intro-scroll-to">
    <Title className="title">What is New Game?</Title>
    <p>
      New Game! is an anime about the experience of a new <i>high-school graduate</i>{" "}
      getting her first game development job where she works her way up from
      knowing <b>nothing</b> to being a valuable member of her team. The story
      is focused on the idea of giving life 110% to achieve your dreams in any
      way you can, how inspiring!
    </p>
    <video style={{ margin: "25px 0" }} src={image} autoPlay loop />
    <p>
      It's a motivational adventure into what it means to transition into
      adulthood and a be in work environment.{" "}
      <a target="_blank" href="https://www.crunchyroll.com/new-game" rel="nofollow noopener">
        Click here to watch it on Crunchyroll!
      </a>
    </p>
    <br />
    <Title className="title">Why is it the best anime?</Title>
    <Checklist />
  </Section>
);
