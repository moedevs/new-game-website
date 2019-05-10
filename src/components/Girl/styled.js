import styled from "styled-components";
import { Column } from "bloomer";

export const GirlSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  
  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  /*
    Alternating the position of
    the girls and text

    These styles are only available
    when the display is flex which
    means everything is consistent
    in mobile mode
   */
  &:nth-child(even) > .columns {
    flex-direction: row-reverse;

    /*
      Alternating the position of
      the strengths/weaknesses
      and character info
     */
    .girl-content .columns {
      flex-direction: row-reverse;
      // Removing alternation on mobile
      @media(max-width: $merge-breakpoint) {
        flex-direction: row;
      }
    }
  }

  &:nth-child(odd) > .columns {
    flex-direction: row;

    .girl-content .columns {
      flex-direction: row;
    }
  }

  @media(max-width: $merge-breakpoint) {
    &:nth-child(even) > .columns {
      flex-direction: column-reverse;
    }

    &:nth-child(odd) > .columns {
      flex-direction: column-reverse;
    }

    .column {
      width: auto !important;
    }
    .section {
      padding: 0;
    }
    .columns {
      justify-content: center;
    }
    .girl-image-column {
      margin: 0 auto;
      padding: 0 10px;
      max-width: 600px;

      .girl {
        margin: 0 auto;
        max-height: 50vh;
      }

      .gatsby-image-wrapper > img {
        height: 300px !important;
        position: relative !important;
        width: auto !important;
      }
    }
  }

  .columns {
    margin: 0 auto;
  }
`;

export const GirlImageColumn = styled(Column)`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0;
`;
