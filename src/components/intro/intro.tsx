import * as React from "react";
import { Card, CardContent, Column, Columns, Content, Section } from "bloomer";

export class SiteIntro extends React.Component {
  state = {
    flickity: {}, options: {
      lazyLoad: 1,
      imagesLoaded: true,
      contain: true
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
        <Section className="intro-section">
          <Content>
            <Columns isCentered>
              <Column isSize="1/2">
                <Card>
                  <CardContent>
                    <h1></h1>
                  </CardContent>
                </Card>
              </Column>
            </Columns>
          </Content>
        </Section>
        <div className="twitter-slides main-carousel"
             id="carousel">
          {this.props.children}
        </div>
      </div>
    );
  }
}
