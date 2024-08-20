// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
  app: {
    head: {
      title: 'digitalgreenbug',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'DigitalGreenBug propose un CMS à destination de structures associatives' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'CMS, association, digital, green, bug, website, digital agency, site web, internet, création site, création application, application web' },
        { property: 'og:title', content: 'digitalgreenbug' },
        { property: 'og:description', content: 'DigitalGreenBug propose un CMS à destination de structures associatives' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.digitalgreenbug.fr' },
        { property: 'og:image', content: 'https://www.digitalgreenbug.fr/favicon.ico' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
});
