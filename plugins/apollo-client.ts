import { defineNuxtPlugin } from "#app";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const uri = nuxtApp.$config.API_ENDPOINT;
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri
  });
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
