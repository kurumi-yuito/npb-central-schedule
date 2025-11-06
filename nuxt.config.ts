export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: '2026 セ・リーグ日程検索',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },
  nitro: { preset: 'static' },
  devtools: { enabled: false }
})
