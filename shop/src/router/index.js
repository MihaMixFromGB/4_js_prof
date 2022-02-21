import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home'
import cart from '../views/Cart'

const routes = [
  { path: '/', component: home },
  { path: '/cart', component: cart }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router