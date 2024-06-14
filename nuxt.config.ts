// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "@nuxt/ui", "nuxt-auth-utils"],
  nitro: {
    experimental: {
      tasks: true
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  hub: {
    database: true
  }
})
