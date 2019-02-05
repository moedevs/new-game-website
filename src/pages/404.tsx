import * as React from "react";
import image from "./404.jpeg";
import { Layout } from "../layouts/layout";
import { Button, Container, Section } from "bloomer";

export default () => (
  <Layout>
    <div style={{ overflow: "hidden", backgroundColor: "#f7f7f7" }}>
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}>
        <Section style={{ maxWidth: "1000px"}}>
          <img src={image} alt="" style={{ maxWidth: "100%" }}/>
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
