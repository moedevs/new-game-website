import styled from "styled-components";

export const TweetContainer = styled.div`
  box-shadow: 5px 12px 15px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1) !important;
  margin: 1rem 1.5rem;
  width: 550px;

  @media (max-width: $tablet) {
      width: 250px;
      height: auto;
  }

  .twitter-controls-container {
      margin-top: 10px;
  }

  .gatsby-resp-image-link {
      margin-bottom: 5px;
  }
`;

export const TweetName = styled.span`
  margin-bottom: 0 !important;
`;

export const TwitterTag = styled.p`
  margin-top: 0 !important;
`;
