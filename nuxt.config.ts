// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Nunito: [400, 700, 900],
      "Montserrat Alternates": [400, 700, 900],
      "Wix Madefor Text": [400, 700, 900],
    },
    display: "swap",
    download: true, // Завантажує шрифт локально при збірці (краще для швидкості)
  },
});
