import * as React from "react";
import Helmet from "react-helmet";

export const Header = () =>
  <Helmet>
    <html lang="en"/>
    <title>New Game!</title>
    <meta name="description" content="New Game website made by the /r/NewGame community"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="New Game!"/>
    <meta property="og:description" content="Game development can't be this cute!"/>
    <meta property="og:type" content="website"/>
    <link rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
    <link rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
    {/* Todo: import font awesome from npm later */}
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"/>
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"/>
  </Helmet>;
