/* tslint:disable:max-line-length */

import * as React from "react";
import Helmet from "react-helmet";

import "./bulma.scss";
import "./girls.scss";
import "./style.scss";
import "./github.scss";

export const Layout = ({ children }: { children: any }) =>
  <div>
    <Helmet
      title="Hifumi.io"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      link={[
        {}
      ]}
    >
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"/>
    </Helmet>

    <>{children}</>
  </div>;
