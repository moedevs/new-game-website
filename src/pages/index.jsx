import * as React from "react";
import { Layout } from "../layouts/layout";
import { LandingPanel } from "../components/landing/landing_panel";
import { SiteFooter } from "../components/outro/footer";
import { SiteIntro } from "../components/intro/intro";
import { MarkdownGirl } from "../components/girls/girls";
import { graphql } from "gatsby";
import { MarkdownTweet } from "../components/intro/twitter/tweet";
import { CtxFanarts } from "../utils";

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
          {tweetInfo.map(tweet => <MarkdownTweet {...tweet}/>)}
        </SiteIntro>
      </CtxFanarts.Provider>
      {allGirls.map(girl => <MarkdownGirl {...girl}/>)}
      <SiteFooter/>
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
              fluid(maxWidth: 600 quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
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
