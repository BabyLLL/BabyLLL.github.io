import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
console.log(routes)
// import routes from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes
})
