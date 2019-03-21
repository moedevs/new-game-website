import * as React from "react";
import { Column, Columns, Icon, Section } from "bloomer";
import { useEffect } from "react";
import GithubCorner from "react-github-corner";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Loader from "react-spinners/PulseLoader";

import "./landing_panel.scss";

const Affiliated = ({ users, type }) => {
  const isDiscord = type === "discord";
  const color = isDiscord ? "#7289da" : "#ff4500";

  const placeholder =
    <Loader size={10} color={color}/>;

  const content =
    <span className="is-size-5-desktop is-size-6-tablet">
      <b>
        {users}
      </b>
      {isDiscord ? " members" : " redditors"}
    </span>;

  return (
    <a
      className={`button is-fullwidth is-large ${type}`}
      href="https://reddit.com/r/NewGame"
    >
      <Icon isSize="large" className={`fab fa-${type}`}/>
      {users ? content : placeholder}
    </a>
  );
};

export const LandingPanel = () => {
  const DEFAULT_USERS = 0;
  const defaultEndpoint = "https://api.hifumi.io/social/stats";
  const [discord, setDiscord] = React.useState(DEFAULT_USERS);
  const [reddit, setReddit] = React.useState(DEFAULT_USERS);

  const getUserData = (endpoint) =>
    fetch(endpoint, { mode: "cors" })
      .then(r => r.json())
      .then(r => {
        setDiscord(r.discordUsers);
        setReddit(r.subscribers);
      });

  // const rollNumbers = () =>

  useEffect(() => {
    void getUserData(defaultEndpoint);
  }, []);

  const scrollTo = () => document.querySelector(".intro").scrollIntoView({
    behavior: "smooth", inline: "nearest", block: "start"
  });

  const title = [
    "is-size-1-desktop",
    "is-size-1-tablet",
    "is-size-2-mobile",
    "has-text-white-ter",
    "banner-text",
    "has-text-centered",
    "shadowed"
  ];

  const query = graphql`{
    file(relativePath: { regex: "/landing.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920 quality: 50 srcSetBreakpoints: [ 700, 1280, 1920 ]) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }`;

  return (
    <div className="landing">
      <StaticQuery query={query} render={data =>
        <Img className="landing-image" fluid={data.file.childImageSharp.fluid}/>
      }/>
      <div className="overlay"/>
      <div className="banner-container">
        <GithubCorner href="https://github.com/xetera/hifumi.io"/>
        <div className="arrow has-text-white" onClick={scrollTo}>
          <Icon className="fa fa-arrow-down is-size-4"/>
        </div>
        <Columns>
          <Column>
            <div className="is-flex banner-text-container">
              <h1 className={title.join(" ")}>New Game!</h1>
              <p className="has-text-white-ter banner-text has-text-centered shadowed">
                {" "}
                ニューゲーム
              </p>
            </div>
            <Section>
              <Columns>
                <Column isSize="1/2">
                  <Affiliated users={discord} type="discord"/>
                </Column>
                <Column isSize="1/2">
                  <Affiliated users={reddit} type="reddit"/>
                </Column>
              </Columns>
            </Section>
          </Column>
        </Columns>
      </div>
    </div>
  );
};
