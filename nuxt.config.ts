import { defineNuxtConfig } from "nuxt";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.NUXT_ENV_API_ENDPOINT
  },
  target: "static",
  ssr: false,
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
  vite: {
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    ssr: {
      noExternal: ["element-plus"]
    }
  },
  css: [
    "assets/css/main.scss"
  ],
  modules: [
    "nuxt-windicss"
  ],
  build: {
    transpile: ["@apollo/client", "ts-invariant/process"]
  }
});
