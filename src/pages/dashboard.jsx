import * as React from "react";
import { ImageBrowser } from "../components/dashboard/image_browser";
import { client } from "../graphql";
import { ApolloProvider } from "react-apollo-hooks";
import { Layout } from "../layouts/layout";
import { toast } from "react-toastify";

export default () => {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <ImageBrowser/>
      </ApolloProvider>
    </Layout>
  );
};
