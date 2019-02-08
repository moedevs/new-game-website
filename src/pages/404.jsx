import * as React from "react";
import { Layout } from "../layouts/layout";
import { Button, Section } from "bloomer";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default ({ data }) => (
  <Layout>
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Section style={{ maxWidth: "1000px" }}>
          <Img fluid={data.file.childImageSharp.image}/>
          <h1 className="title has-text-grey-dark">
            We totally have a page here but you can't see it!
          </h1>
          <h2 className="subtitle has-text-grey-dark">
            Or maybe it's empty... sorry
          </h2>
          <Button isColor="primary" href={process.env.WEBSITE_URL}>Get me out of here!</Button>
        </Section>
      </div>
    </div>
  </Layout>
);

export const pageQuery = graphql`{
  file(relativePath: { regex: "/404.jpeg/" }) {
    childImageSharp {
      image: fluid(maxWidth: 1000 quality: 100) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`;
