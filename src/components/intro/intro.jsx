import * as React from "react";
import { MediaSection } from "./fan_art";

export class SiteIntro extends React.Component {
  state = {
    flickity: {},
    currentTweet: 1,
    options: {
      lazyLoad: 1,
      alignCell: "center",
      imagesLoaded: true,
      pageDots: false,
      contain: true,
      on: {
        change: (index) => this.setState({ currentTweet: index + 1 })
      }
    }
  };

  componentDidMount() {
    /**
     * Flickity has a problem with requiring window which
     * isn't available while server side rendering. This
     * forces us to use proper React classes to take
     * advantage of lifecycle hooks that functional components
     * don't really allow
     */
    require("flickity-imagesloaded");
    const Flickity = require("flickity");
    this.setState({
      flickity: new Flickity("#carousel", this.state.options)
    });
  }


  render() {
    return (
      <div className="intro">
        {/* <Description/>*/}
        <MediaSection/>
        <div style={{ position: "relative" }}>
          <div className="twitter-slides main-carousel no-padding-top"
               id="carousel">
            {this.props.children}
          </div>
          <h1
            className="title has-text-grey is-7"
            style={{ bottom: "0",  padding: "8px", position: "absolute" }}
          >
            {this.state.currentTweet}/{this.props.children.length}
          </h1>
        </div>
      </div>
    );
  }
}
