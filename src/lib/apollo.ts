import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "YOUR_GRAPHCMS_API_URL",
  cache: new InMemoryCache(),
});
