// nuxt.config.ts
// ★ここに実際の計測IDを直書き（まずは確実に読むことを最優先）
const GA = 'G-MTV73LG719'

export default defineNuxtConfig({
  app: {
    head: {
      title: '2026 セ・リーグ日程検索',
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'theme-color', content: '#0b79d0' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'manifest', href: '/manifest.json' }
      ],
      // ★ <head> に gtag を確実に挿す（send_page_viewはSPAなので切る）
      script: GA ? [
        { src: `https://www.googletagmanager.com/gtag/js?id=${GA}`, async: true },
        {
          // inline script
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${GA}', { send_page_view: false });
          `
        }
      ] : []
    }
  },
  runtimeConfig: {
    public: {
      gaId: GA
    }
  }
})
