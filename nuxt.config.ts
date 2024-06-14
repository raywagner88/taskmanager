// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxthub/core"
  ],
  nitro: {
    experimental: {
      tasks: true
    }
  },
  hub: {
    database: true
  }
})
