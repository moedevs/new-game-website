import * as React from "react";
import { Content } from "bloomer";
import { ApolloProvider, useQuery } from "react-apollo-hooks";
import ApolloClient from "apollo-boost";
import { ImageBrowser } from "../components/dashboard/image_browser";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: process.env.NODE_ENV === "production"
    ? "https://db.hifumi.io/v1alpha1/graphql"
    : "http://localhost:8080/v1alpha1/graphql"
});

const imageQuery = gql`{
  images {
    url
    file_name
    tags: image_tags {
      name
    }
    user {
      name
      avatar
    }
  }
}`;

export const DashboardWrapper = () => {
  const { data, error, loading } = useQuery(imageQuery);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops...{error}</div>;
  }

  return <ImageBrowser images={data.images}/>;
};

export default () => {
  return (
    <ApolloProvider client={client}>
      {/*/!*<header>*!/*/}
        {/*/!*<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">*!/*/}
          {/*/!*<path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120"*!/*/}
                {/*/!*stroke-linecap="round"/>*!/*/}
        {/*/!*</svg>*!/*/}
      <DashboardWrapper/>
      {/*</header>*/}
    </ApolloProvider>
  );
}
