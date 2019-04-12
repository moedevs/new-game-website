import * as React from "react";
import { ImageBrowser } from "../components/dashboard/image_browser";
import { client } from "../graphql";
import { ApolloProvider } from "react-apollo-hooks";

export default () => {
  return (
    <ApolloProvider client={client}>
      <ImageBrowser/>
    </ApolloProvider>
  );
};
