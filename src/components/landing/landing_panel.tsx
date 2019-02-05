import * as React from "react";
import { Button, Column, Columns, Icon, Section } from "bloomer";
import GithubCorner from "react-github-corner";
import { useEffect } from "react";

interface AffiliatedProps {
  users: number;
  type: "discord" | "reddit";
}

const Affiliated = ({ users, type }: AffiliatedProps) => {
  const isDiscord = type === "discord";

  return (
    <a
      className={`button is-fullwidth is-large ${type}`}
      href="https://reddit.com/r/NewGame"
    >
      <Icon isSize="large" className={`fab fa-${type}`}/>
      <span className="is-size-5-desktop is-size-6-tablet">
        <b id="discord-users">{users}</b>
        {isDiscord ? " members" : " redditors"}
      </span>
    </a>
  );
};

export const LandingPanel = () => {
  const defaultEndpoint = "https://whamer.000webhostapp.com/api/hifumi.php";
  const [discord, setDiscord] = React.useState(0);
  const [reddit, setReddit] = React.useState(0);

  const getUserData = (endpoint: string) =>
    fetch(endpoint, { mode: "cors" })
      .then(r => r.json())
      .then(r => {
        setDiscord(r.discordUsers);
        setReddit(r.subscribers);
      });

  useEffect(() => void getUserData(defaultEndpoint), []);

  const title = [
    "is-size-1-desktop",
    "is-size-1-tablet",
    "is-size-2-mobile",
    "has-text-white-ter",
    "banner-text",
    "has-text-centered",
    "shadowed"
  ];

  return (
    <div className="landing">
      <div className="overlay"/>
      <div className="banner-container">
        <GithubCorner href="https://github.com/xetera/hifumi.io"/>
        <div className="arrow has-text-white">
          <Icon className="fa fa-arrow-down"/>
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
