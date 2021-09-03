import 'windi.css'
import './style/index.postcss'

import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'

export const createApp = ViteSSG(App, { routes })
