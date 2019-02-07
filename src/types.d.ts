import { ReactNode } from "react";

export interface WithChildren {
  children: ReactNode;
}

export interface IndexProps {
  data: {
    girls: GirlsQuery;
    tweets: TweetsQuery;
    users: UsersQuery
  };
}

export interface UsersQuery {
  edges: Array<{
    node: {
      frontmatter: {
        name: string;
        verified: boolean;
        tag: string;
        avatar: {
          childImageSharp: {
            fixed: any;
          }
        }
      }
    }
  }>
}

export interface GirlsQuery {
  edges: Array<{
    node: {
      html: string;
      frontmatter: {
        order: number;
        quote: string;
        color: string;
        strengths: string[];
        weaknesses: string[];
      }
    }
  }>;
}

export interface TweetsQuery {
  edges: Array<{
    node: {
      html: string;
      frontmatter: {
        name: string;
        hashtags: string[];
        date: string;
        retweets: string;
        likes: string;
      }
    }
  }>;
}

export interface TweetsQuery {
  edges: Array<{
    node: {
      html: string;
      frontmatter: {
        name: string;
        hashtags: string[];
        date: string;
        retweets: string;
        likes: string;
      }
    }
  }>;
}

export interface TweetMetadata {
  readonly [girl: string]: {
    tag: string;
    verified: boolean;
    avatar: string;
  };
}

export interface TweetProps {
  avatar: any;
  name: string;
  tag: string;
  verified: boolean;
  content: string;
  hashtags: string[];
  time: string;
  retweets: string;
  likes: string;
}

export interface Girls {
  [girls: string]: {
    name: string;
    tag: string;
    verified: boolean;
    avatar: string;
  };
}

export interface MarkdownTweetProps {
  name: string;
  hashtags: string[];
  date: string;
  retweets: string;
  likes: string;
  html: string;
  avatar: any;
  verified: boolean;
  tag: string;
}
