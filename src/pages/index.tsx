import * as React from "react";
import { Layout } from "../layouts/layout";
import { LandingPanel } from "../components/landing/landing_panel";
import { SiteFooter } from "../components/outro/footer";
import { SiteIntro } from "../components/intro/intro";
import { MarkdownGirl } from "../components/girls/girls";
import { graphql } from "gatsby";
import { MarkdownTweet } from "../components/intro/twitter/tweet";
import { GirlsQuery, TweetsQuery } from "../types";

export default ({ data: { girls, tweets } }: { data: { girls: GirlsQuery, tweets: TweetsQuery } }) => {
  const allTweets = tweets.edges.map(tweet => ({
    ...tweet.node.frontmatter,
    html: tweet.node.html
  }));

  const allGirls = girls.edges.map(item => ({
    ...item.node.frontmatter,
    html: item.node.html
  }));

  return (
    <Layout>
      <LandingPanel/>
      <SiteIntro>
        {allTweets.map(tweet => <MarkdownTweet {...tweet}/>)}
      </SiteIntro>
      {allGirls.map(girl => <MarkdownGirl {...girl}/>)};
      <SiteFooter/>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    girls: allMarkdownRemark(
      sort: {order: ASC, fields: [frontmatter___order]}
      filter: {fileAbsolutePath: {regex: "/\/girls\//"}}
    ) {
      edges {
        node {
          html
          frontmatter {
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
      filter: {fileAbsolutePath: {regex: "/\/tweets\//"}}
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
  }
`;
