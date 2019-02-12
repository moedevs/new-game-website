import * as React from "react";
import { FanArt } from "./fan_art";
import { CtxFanarts } from "../../utils";
import { Section } from "bloomer";

export class SiteIntro extends React.Component {
  state = {
    flickity: {},
    currentTweet: 1,
    options: {
      lazyLoad: 1,
      alignCell: "center",
      imagesLoaded: true,
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
        <FanArt />
        <div style={{ backgroundColor: "#7e78d6" }}>
          <div className="is-flex" style={{ paddingTop: 20 }}>
            <h1
              className="title has-text-white-ter is-2"
              style={{ margin: "0 auto" }}
            >
              {this.state.currentTweet}/{this.props.children.length} Tweets
            </h1>
          </div>
          <div className="twitter-slides main-carousel no-padding-top"
               id="carousel">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
