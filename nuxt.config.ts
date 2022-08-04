import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.NUXT_ENV_API_ENDPOINT
  },
  head: {
    title: "nuxt3-GraphQL-pet",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ]
  },
  css: [
    "element-plus/dist/index.css",
    "assets/css/main.scss"
  ],
  modules: [
    "nuxt-windicss"
  ],
  build: {
    transpile: ["@apollo/client", "ts-invariant/process"]
  }
});
