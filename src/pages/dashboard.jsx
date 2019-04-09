import * as React from "react";
import { ImageBrowser } from "../components/dashboard/image_browser";
import gql from "graphql-tag";
import { client } from "../graphql";
import { ApolloProvider, useSubscription } from "react-apollo-hooks";
import aobaLoader from "../loaders/aobaload.gif";
import { Loader } from "../loaders";

const imageQuery = gql`
  subscription {
    images(limit: 20, order_by: { created_at: desc }) {
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
  }
`;

export const DashboardWrapper = () => {
  const { data, error, loading } = useSubscription(imageQuery);

  if (error) {
    console.log(error)
    return <div>Oops...</div>;
  }

  if (loading) {
    return <Loader media={aobaLoader}/>;
  }


  return <ImageBrowser images={data.images}/>;
};

export default () => {
  return (
    <ApolloProvider client={client}>
      {/* /!*<header>*!/*/}
      {/* /!*<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">*!/*/}
      {/* /!*<path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120"*!/*/}
      {/* /!*stroke-linecap="round"/>*!/*/}
      {/* /!*</svg>*!/*/}
      <DashboardWrapper/>
      {/* </header>*/}
    </ApolloProvider>
  );
};
