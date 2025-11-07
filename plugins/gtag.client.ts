// plugins/gtag.client.ts
export default defineNuxtPlugin(() => {
  const cfg = useRuntimeConfig()
  const id = cfg.public.gaId
  console.log('[client] gaId =', id) 
  if (!id) {
    console.warn('[GA4] NUXT_PUBLIC_GA_ID が空やで')
    return
  }

  // gtag.js 読み込み
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
  // SPAやから自動 page_view は切って手動で送る
  // @ts-ignore
  gtag('config', id, { send_page_view: false })

  const router = useRouter()

  // ★ 初回ロード分を必ず送る（これ無いとリアルタイムに出えへんこと多い）
  router.isReady().then(() => {
    // @ts-ignore
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: router.currentRoute.value.fullPath,
      // デバッグ時に DebugView に出す
      debug_mode: import.meta.env.DEV ? true : undefined
    })
    // ★ その後の遷移も送る
    router.afterEach((to) => {
      // @ts-ignore
      window.gtag?.('event', 'page_view', {
        page_title: document.title,
        page_location: location.href,
        page_path: to.fullPath,
        debug_mode: import.meta.env.DEV ? true : undefined
      })
    })
  })
})
