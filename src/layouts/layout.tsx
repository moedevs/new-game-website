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
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <>{children}</>
  </div>;
