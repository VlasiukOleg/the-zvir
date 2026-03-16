// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-meta-pixel"],
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
  runtimeConfig: {
    public: {
      googleApiKey: "",
      sheetId: "1tlTP3I9tj0PbVHtnCNGa3u4dEqZRoud-0BHUBr_aAuk",
      metapixel: {
        default: { id: '910025741945629', pageView: '**' },
    }
    },
    
  },
  app: {
    head: {
      title: 'The Zvir - зоомагазин та грумінг салон. Ваш вірний супутник у світі турботи про вихованців',
    },
  },
});