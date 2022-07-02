import { ApolloProvider } from "@apollo/client";

import Router from "./Router";
import { apolloClient } from "./lib/apollo";

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
