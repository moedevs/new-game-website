import * as React from "react";
import Helmet from "react-helmet";

import favicon from "./favicon.jpg";

export const Header = () =>
  <Helmet
    title="New Game!"
    meta={[
      {
        name: "description", content: "New Game! fan site made by the /r/NewGame community"
      },
      {
        property: "og:type", content: "website"
      },
      {
        property: "og:title", content: "New Game!"
      },
      {
        property: "og:description", content: "Game development can't be this cute!"
      },
      {
        property: "og:type", content: "website"
      },
      {
        name: "keywords", content: "sample, something"
      }
    ]}
  >
    {/* Todo: import font awesome from npm later */}
    <link rel="icon" href={favicon}/>
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"/>
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"/>
  </Helmet>;
