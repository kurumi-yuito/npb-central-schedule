const GA = 'G-MTV73L7G719'

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
  devtools: { enabled: false },
  script: GA ? [
        { src: `https://www.googletagmanager.com/gtag/js?id=${GA}`, async: true },
        {
          children: `
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', '${GA}', { send_page_view: false });
          `
        }
  ] : [],
  runtimeConfig: {
    public: {
      gaId: GA  // ← ついでに公開設定にも入れておく（プラグイン側で参照）
    }
  }
})
