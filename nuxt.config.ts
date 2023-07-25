// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Bagheera´s Shop",
      link: [
        {
          rel: "icon",
          type: "image",
          href: "https://static.vecteezy.com/system/resources/previews/006/324/189/non_2x/illustration-of-a-silhouette-of-a-black-cat-vector.jpg",
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    viewer: true,
  },
  css: ["@fortawesome/fontawesome-free/css/all.min.css"],
});
