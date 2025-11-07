export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: '2026 セ・リーグ日程検索',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    }
  },
  nitro: { preset: 'static' },
  devtools: { enabled: false }
  runtimeConfig: {
    public: {
      gaId: process.env.NUXT_PUBLIC_GA_ID || ''
    }
  }
})
