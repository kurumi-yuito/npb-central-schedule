// plugins/gtag.client.ts
export default defineNuxtPlugin(() => {
  const id = useRuntimeConfig().public.gaId
  if (!id) return           // IDないなら無視

  const router = useRouter()

  // 初回ページビュー
  router.isReady().then(() => {
    // @ts-ignore
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: router.currentRoute.value.fullPath
    })
  })

  // ルート遷移ごとにページビュー
  router.afterEach((to) => {
    // @ts-ignore
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: to.fullPath
    })
  })
})
