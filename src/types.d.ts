import { ReactNode } from "react";

export interface WithChildren {
  children: ReactNode;
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
