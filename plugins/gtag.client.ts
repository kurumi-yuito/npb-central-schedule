// plugins/gtag.client.ts
export default defineNuxtPlugin(() => {
  const id = useRuntimeConfig().public.gaId
  if (!id) return

  const router = useRouter()

  // 初回
  router.isReady().then(() => {
    // @ts-ignore
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: router.currentRoute.value.fullPath
    })
  })

  // 以降の遷移
  router.afterEach((to) => {
    // @ts-ignore
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: location.href,
      page_path: to.fullPath
    })
  })
})
