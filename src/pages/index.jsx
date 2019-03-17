import * as React from "react";
import { Layout } from "../layouts/layout";
import { LandingPanel } from "../components/landing/landing_panel";
import { SiteIntro } from "../components/intro/intro";
import { MarkdownGirl } from "../components/girls/girls";
import { graphql } from "gatsby";
import { MarkdownTweet } from "../components/intro/twitter/tweet";
import { CtxFanarts } from "../utils";
import { OutroPanel } from "../components/outro/outro_panel";

export default ({ data: { girls, tweets, users, fanarts } }) => {
  const allTweets = tweets.edges.map(tweet => ({
    ...tweet.node.frontmatter,
    html: tweet.node.html
  }));

  const allGirls = girls.edges.map(({ node }) => {
    const { frontmatter, html } = node;
    const { thumbnail, image } = frontmatter;

    return ({
      ...frontmatter,
      html,
      thumbnail: thumbnail && thumbnail.childImageSharp.fixed,
      image: image.childImageSharp.fluid
    });
  });

  const allUsers = users.edges.reduce((all, { node: { frontmatter } }) => ({
    ...all,
    [frontmatter.name]: {
      ...frontmatter,
      avatar: frontmatter.avatar.childImageSharp.fixed
    }
  }), {});

  const tweetInfo = allTweets.map(tweet => ({ ...tweet, ...allUsers[tweet.name] }));

  const allFanart = fanarts.images.map(({ image: { image }, src }) => ({
    image: image.fixed,
    src
  }));

  return (
    <Layout>
      <LandingPanel/>
      <CtxFanarts.Provider value={allFanart}>
        <SiteIntro fanart={allFanart}>
          {tweetInfo.map((tweet, i)=> <MarkdownTweet {...tweet} key={i}/>)}
        </SiteIntro>
      </CtxFanarts.Provider>
      {allGirls.map(girl => <MarkdownGirl {...girl} key={girl.color}/>)}
      <OutroPanel/>
    </Layout>
  );
};

export const pageQuery = graphql`{
  girls: allMarkdownRemark(
    sort: {order: ASC, fields: [frontmatter___order]}
    filter: {fileAbsolutePath: {regex: "/\/girls\//"}}
  ) {
    edges {
      node {
        html
        frontmatter {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          thumbnail {
            childImageSharp {
              fixed(width: 48 height: 48 quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          color
          name
          quote
          role
          strengths
          weaknesses
        }
      }
    }
  }
  tweets: allMarkdownRemark(
    sort: {order: ASC, fields: [frontmatter___date]}
    # filtering only the first level markdown files
    filter: {fileAbsolutePath: {regex: "/\/tweets\/[^/]+.md/"}}
  ) {
    edges {
      node {
        html
        frontmatter {
          name
          hashtags
          date
          retweets
          likes
        }
      }
    }
  }
  users:  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/tweets/users/[^/]+.md/"}}
  ) {
    edges {
      node {
        frontmatter {
          name
          verified
          tag
          avatar {
            childImageSharp {
              fixed (width: 64 height:64 quality: 80) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
  fanarts: imagesYaml {
    images {
      image {
        image: childImageSharp {
          fixed(width: 250 height: 350 quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      src
    }
  }
}`;
