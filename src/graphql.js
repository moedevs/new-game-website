import { WebSocketLink } from "apollo-link-ws";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { HttpLink } from "apollo-link-http";

const uri = process.env.NODE_ENV === "production"
  ? "db.hifumi.io/v1alpha1/graphql"
  : "localhost:8080/v1alpha1/graphql";

const wsLink = new WebSocketLink({
  uri: `ws://${uri}`,
  options: {
    reconnect: true
  }
});
const httpLink = new HttpLink({ uri: `https://${uri}` });

const link = split(
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
