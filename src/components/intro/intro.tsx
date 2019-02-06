import * as React from "react";

export class SiteIntro extends React.Component {
  state = { flickity: {} };

  componentDidMount() {
    /**
     * Flickity has a problem with requiring window which
     * isn't available while server side rendering. This
     * forces us to use proper React classes to take
     * advantage of lifecycle hooks that functional components
     * don't really allow
     */
    const Flickity = require("flickity");
    this.setState({ flickity: new Flickity("#carousel") });
  }
  render() {
    return (
      <div className="intro">
        <div className="twitter-slides main-carousel" id="carousel">
          {this.props.children}
        </div>
      </div>
    );
  }
}
