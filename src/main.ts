import 'windi.css'
import './style/index.postcss'

// import { createApp } from 'vue'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'

// import { createHead } from '@vueuse/head'
// import { router } from './router/router'

// const app = createApp(App)
// const head = createHead()

// app.use(router)

// app.use(head)

// app.mount('#app')

export const createApp = ViteSSG(App, { routes }, ctx => {
  Object.values(import.meta.globEager('./plugins/*.ts')).map(i =>
    i.install?.(ctx)
  )
})
