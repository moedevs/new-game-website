import * as React from "react";
import {
  Card,
  CardContent,
  Container,
  Content,
  Icon, Level, LevelItem, LevelLeft, Media, MediaContent, MediaLeft
} from "bloomer";
import { girls } from "../../girls/girls";
import verified from "./verified.png";
import * as path from "path";
import hifumi from "./avatars/hifumi.jpg";

const avatars: { readonly [k: string]: string } = girls.reduce((all, girl) => {
  try {
    return ({
      ...all,
      [girl]: require(`./avatars/${girl}.jpg`)
    });
  } catch (_) {
    return all;
  }
}, {});

interface TweetProps {
  avatar: string;
  name: string;
  tag: string;
  verified: boolean;
  content: string;
  image?: string;
  hashtags: string[];
  time: string;
  retweets: string;
  likes: string;
}

export const Tweet = (props: TweetProps) => {
  const badge =
    <span className="icon is-32x32 is-vcentered">
      <img src={verified} alt="" style={{ marginLeft: "10px" }}/>
    </span>;

  const tweetImage = <img src={props.image} className="tweet-image" alt=""/>;

  const hashTags = props.hashtags.map(
    tag => <a href={tag} key={tag}>{`#${tag} `}</a>
  );

  return (
    <div className="tweet-container carousel-cell">
      <Card className="tweet">
        <CardContent>
          <Media>
            <MediaLeft>
              <figure className="image is-48x48">
                <img src={hifumi} alt=""/>
              </figure>
            </MediaLeft>
            <MediaContent>
              <Container>
                <p className="title is-4 tweet-name is-flex">
                  {props.name}
                  {props.verified && badge}
                </p>
                <p className="subtitle has-text-grey is-6">{props.tag}</p>
              </Container>
            </MediaContent>
          </Media>
          <Content>
            {props.content}
            {props.image && tweetImage}
            <br/>
            {props.hashtags && hashTags}
            <br/>
            <time>{props.time}</time>
            <Level>
              <LevelLeft>
                <LevelItem>
                  <span className="tweet-controls.has-text-info">
                    <Icon className="fas fa-retweet"/>
                    <span>{props.retweets}</span>
                  </span>
                </LevelItem>
                <LevelItem>
                  <span className="tweet-controls.has-text-danger">
                    <Icon className="far fa-heart"/>
                    <span>{props.likes}</span>
                  </span>
                </LevelItem>
              </LevelLeft>
            </Level>
          </Content>
        </CardContent>
      </Card>
    </div>
  );
};
