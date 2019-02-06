import * as React from "react";
import * as datefns from "date-fns";
import {
  Card,
  CardContent,
  Container,
  Content,
  Icon,
  Level,
  LevelItem,
  LevelLeft,
  Media,
  MediaContent,
  MediaLeft
} from "bloomer";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface TweetMetadata {
  readonly [girl: string]: {
    tag: string;
    verified: boolean;
    avatar: string;
  };
}

const tweetMetadata: TweetMetadata = Object.entries({
  hifumi: {
    tag: "@HTakimoto",
    verified: true
  },
  hajime: {
    tag: "@HShinoda",
    verified: true
  },
  aoba: {
    tag: "@ASuzukaze",
    verified: true
  }
}).reduce((all, [k, v]) => ({
  ...all,
  [k]: {
    ...v,
    avatar: require(`./avatars/${k}.jpg`)
  }
}), {});

interface TweetProps {
  avatar: string;
  name: string;
  tag: string;
  verified: boolean;
  content: string;
  hashtags: string[];
  time: string;
  retweets: string;
  likes: string;
}

export interface MarkdownTweetProps {
  name: string;
  hashtags: string[];
  date: string;
  retweets: string;
  likes: string;
  html: string;
}

export const Tweet = (props: TweetProps) => {
  const query = graphql`{
    file(relativePath: { regex: "/verified.png/" }) {
      childImageSharp {
        image: fixed(width: 24 height: 24 quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`;

  const badge = (
    <StaticQuery query={query} render={verified =>
      <Img
        fixed={verified.file.childImageSharp.image}
        style={{ marginLeft: "5px" }}
      />
    }/>
  );

  const hashTags = props.hashtags.map(tag => (
    <a href={tag} key={tag}>{`#${tag} `}</a>
  ));

  const avatar = tweetMetadata[props.name.toLowerCase()].avatar;

  // first index of match is the original string which we don't want
  const [, ...captures] = props.time.match(/(\d+)-(\d+)-(\d+)/);

  // @ts-ignore [spreading an array into arguments is buggy]
  const readableDate = datefns.format(new Date(...captures), "MMMM do YYYY");
  return (
    <div className="tweet-container carousel-cell">
      <Card className="tweet">
        <CardContent>
          <Media>
            <MediaLeft>
              <figure className="image is-48x48">
                <img src={avatar} alt=""/>
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
            <div dangerouslySetInnerHTML={{ __html: props.content }}/>
            {props.hashtags && hashTags}
            <br/>
            <time>{readableDate}</time>
            <Level isMobile>
              <LevelLeft>
                <LevelItem>
                  <span className="tweet-controls has-text-info">
                    <Icon className="fas fa-retweet"/>
                    <span>{props.retweets}</span>
                  </span>
                </LevelItem>
                <LevelItem>
                  <span className="tweet-controls has-text-danger">
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

export const MarkdownTweet = (props: MarkdownTweetProps) => {
  const name = props.name.toLowerCase();
  const { verified: isVerified, tag, avatar } = tweetMetadata[name];

  return (
    <Tweet
      avatar={avatar}
      name={props.name}
      tag={tag}
      verified={isVerified}
      content={props.html}
      hashtags={props.hashtags}
      time={props.date}
      retweets={props.retweets}
      likes={props.likes}/>
  );
};
