import 'windi.css'
import './style/index.postcss'

import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { router } from './router/router'

const app = createApp(App)
const head = createHead()

app.use(router)

app.use(head)

app.mount('#app')
