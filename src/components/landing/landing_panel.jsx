import * as React from "react";
import { Column, Columns, Icon, Section } from "bloomer";
import { useEffect } from "react";
import GithubCorner from "react-github-corner";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Loader from "react-spinners/PulseLoader";

import "./landing_panel.scss";

const Affiliated = ({ users, type, url }) => {
  const isDiscord = type === "discord";
  const color = isDiscord ? "#7289da" : "#ff4500";

  const placeholder = <Loader size={10} color={color} />;

  const content = (
    <span className="is-size-5-desktop is-size-5-tablet is-size-6-mobile">
      <b>{users}</b>
      {isDiscord ? " members" : " redditors"}
    </span>
  );

  return (
    <a className={`button is-fullwidth is-large ${type}`} href={url}>
      <Icon isSize="large" className={`fab fa-${type}`} />
      {users ? content : placeholder}
    </a>
  );
};

export const LandingPanel = () => {
  const DEFAULT_USERS = 0;
  const generateUrl = invite =>
    `https://discordapp.com/api/v6/invite/${invite}?with_counts=true`;
  const [discord, setDiscord] = React.useState(DEFAULT_USERS);
  const [supportServer, setSupportServer] = React.useState(DEFAULT_USERS);

  const getUserData = (endpoint, f) =>
    fetch(endpoint, { mode: "cors" })
      .then(r => r.json())
      .then(({ approximate_member_count }) => {
        f(approximate_member_count);
      });

  // const rollNumbers = () =>

  useEffect(() => {
    void getUserData(generateUrl("ZWW5CJw"), setDiscord);
    void getUserData(generateUrl("RM6KUrf"), setSupportServer);
  }, []);

  const scrollTo = () =>
    document.querySelector(".intro-scroll-to").scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "start"
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

  const query = graphql`
    {
      file(relativePath: { regex: "/landing.jpg/" }) {
        childImageSharp {
          fluid(
            maxWidth: 1920
            quality: 50
            srcSetBreakpoints: [700, 1280, 1920]
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `;

  return (
    <div className="landing">
      <StaticQuery
        query={query}
        render={data => (
          <Img
            className="landing-image"
            fluid={data.file.childImageSharp.fluid}
          />
        )}
      />
      <div className="overlay" />
      <div className="banner-container">
        <GithubCorner href="https://github.com/xetera/hifumi.io" />
        <div className="arrow has-text-white" onClick={scrollTo}>
          <Icon className="fa fa-arrow-down is-size-4" />
        </div>
        <Columns>
          <Column>
            <div className="is-flex banner-text-container">
              <h1 className={title.join(" ")}>New Game!</h1>
              <p className="has-text-white-ter banner-text has-text-centered shadowed">
                ニューゲーム
              </p>
            </div>
            <Section>
              <Columns>
                <Column isSize="1/2">
                  <p
                    className="is-size-6 is-size-7-mobile"
                    style={{ fontWeight: "ligher", color: "white" }}
                  >
                    Join the New Game server
                  </p>
                  <Affiliated
                    users={discord}
                    type="discord"
                    url="https://discord.gg/ZWW5CJw"
                  />
                </Column>
                <Column isSize="1/2">
                  <p
                    className="is-size-6 is-size-7-mobile"
                    style={{ fontWeight: "ligher", color: "white" }}
                  >
                    Join Hifumi's server
                  </p>
                  <Affiliated
                    users={supportServer}
                    type="discord"
                    url="https://discord.gg/RM6KUrf"
                  />
                </Column>
              </Columns>
            </Section>
          </Column>
        </Columns>
      </div>
    </div>
  );
};
