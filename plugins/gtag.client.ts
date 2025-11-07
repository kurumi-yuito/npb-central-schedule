// plugins/gtag.client.ts
export default defineNuxtPlugin(() => {
  const id = useRuntimeConfig().public.gaId
  if (!id) return

  // gtag.js を動的ロード
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)

  // 初期化
  // @ts-ignore
  window.dataLayer = window.dataLayer || []
  // @ts-ignore
  function gtag(){ window.dataLayer.push(arguments) }
  // @ts-ignore
  window.gtag = gtag
  // @ts-ignore
  gtag('js', new Date())
  // @ts-ignore
  gtag('config', id, { send_page_view: false }) // ルート遷移で手動送信するため

  // ルート遷移ごとに page_view を送る（SPA 用）
  const router = useRouter()
  router.afterEach((to) => {
    // @ts-ignore
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: to.fullPath
    })
  })
})
