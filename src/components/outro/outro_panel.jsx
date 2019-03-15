import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Column, Columns, Footer, Icon, Section } from "bloomer";
import { anchorize } from "../../utils";

import "./footer.scss";

export const OutroPanel = () => {
  const love = (
    <Icon className="fa fa-heart" style={{ color: "red" }} isSize="small"/>
  );
  const query = graphql`{
    outro: file(relativePath: { regex: "/outro.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920 quality: 70 srcSetBreakpoints: [ 1280, 1920 ]) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    crunchyroll: file(relativePath: { regex: "/crunchyroll.png/" }) {
      childImageSharp {
        fixed(width: 24 height: 24) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    anilist: file(relativePath: { regex: "/anilist.png/" }) {
      childImageSharp {
        fixed(width: 24 height: 24) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }`;
  return (
    <StaticQuery query={query} render={({ outro, crunchyroll, anilist }) =>
      <div className="landing">
        <Img className="landing-image" fluid={outro.childImageSharp.fluid}/>
        <div className="overlay"/>
        <div className="banner-container">
          <Section className="outro-container outro-container">
            <div className="outro-buttons">
              <Columns>
                <Column>
                  <h1
                    className="is-size-2-desktop is-size-2-tablet is-size-3-mobile has-text-white-ter banner-text has-text-centered shadowed">
                    Why are you still here?! Go watch New Game!
                  </h1>
                </Column>
              </Columns>
              <Columns>
                <Column className="is-fullwidth" isSize="1/2">
                  <div className="watch-links">
                    <a className="button is-fullwidth is-large crunchyroll"
                       {...anchorize("https://www.crunchyroll.com/new-game")} >
                      <Img fixed={crunchyroll.childImageSharp.fixed}
                           alt="Crunchyroll link"
                           style={{ marginRight: "10px" }}/>
                      <b>Watch on Crunchyroll</b>
                    </a>
                  </div>
                </Column>
                <Column className="is-fullwidth" isSize="1/2">
                  <div className="watch-links">
                    <a className="button is-fullwidth is-large anilist"
                       {...anchorize("https://anilist.co/anime/21455/New-Game")} >
                      <Img fixed={anilist.childImageSharp.fixed}
                           alt="Anilist link"
                           style={{ marginRight: "10px" }}/>
                      <b>Look up on Anilist</b>
                    </a>
                  </div>
                </Column>
              </Columns>
            </div>
          </Section>
          <div className="outro-bottom has-text-white-ter has-text-centered">
            <h4>Made with {love} by the /r/NewGame community</h4>
          </div>
        </div>
      </div>
    }/>
  );
};
