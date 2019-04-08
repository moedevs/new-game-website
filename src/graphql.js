import { WebSocketLink } from "apollo-link-ws";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-fetch";

const isProduction = process.env.NODE_ENV !== "production";
const uri = isProduction
  ? "db.hifumi.io/v1alpha1/graphql"
  : "localhost:8080/v1alpha1/graphql";

// websocket subscriptions connections do not work in a browser environment
const wsLink = process.browser && new WebSocketLink({
  uri: isProduction ? `wss://${uri}` : `ws://${uri}`,
  fetch,
  options: {
    reconnect: true
  }
});
const httpLink = new HttpLink({
  uri: isProduction ? `https://${uri}` : `http://${uri}`
  , fetch
});

const link = !process.browser ? httpLink : split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
