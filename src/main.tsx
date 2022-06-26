import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home";
import { apolloClient } from "./lib/apollo";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <HomePage />
    </ApolloProvider>
  </React.StrictMode>
);
