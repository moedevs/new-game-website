import * as React from "react";
import * as parse from "date-fns/parse";
import * as format from "date-fns/format";
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

export const Tweet = (props) => {
  const verifiedQuery = graphql`{
    file(relativePath: { regex: "/verified.png/" }) {
      childImageSharp {
        image: fixed(width: 24 height: 24 quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`;

  const badge = (
    <StaticQuery query={verifiedQuery} render={({ file }) =>
      <Img
        fixed={file.childImageSharp.image}
        style={{ marginLeft: "5px" }}
      />
    }/>
  );

  const hashTags = props.hashtags && props.hashtags.map(tag => (
    <a href={`https://twitter.com/hashtag/${tag}`} key={tag}>{`#${tag} `}</a>
  ));

  // get fake mentions a link color
  const content = props.content
    .replace(/(@[^\b]*)/g, "<span class='has-text-link'>$1</span>");

  const parsed = parse(props.time).toISOString();

  const readableDate = format(parsed, "MMMM Do YYYY");
  return (
    <div className="tweet-container carousel-cell">
      <Card className="tweet">
        <CardContent>
          <Media>
            <MediaLeft>
              <figure className="image is-48x48">
                <Img style={{ position: "static" }} fixed={props.avatar} alt=""/>
              </figure>
            </MediaLeft>
            <MediaContent>
              <Container>
                <span className="title is-4 tweet-name is-flex">
                  {props.name}
                  {props.verified && badge}
                </span>
                <p className="subtitle has-text-grey is-6 twitter-tag">{props.tag}</p>
              </Container>
            </MediaContent>
          </Media>
          <Content>
            <div className="tweet-content" dangerouslySetInnerHTML={{ __html: content }}/>
            {props.hashtags && <div>{hashTags}<br/></div>}
            <time className="has-text-grey is-size-7">{readableDate}</time>
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

export const MarkdownTweet = (props) => {
  return (
    <Tweet
      avatar={props.avatar}
      name={props.name}
      tag={props.tag}
      verified={props.verified}
      content={props.html}
      hashtags={props.hashtags}
      time={props.date}
      retweets={props.retweets}
      likes={props.likes}/>
  );
};
