import { createRouter, createWebHistory } from 'vue-router'
import NewsPage from '../views/NewsPage.vue'
import ItemPage from '../views/ItemPage.vue'

const routes = [
  {
    path: '/',
    name: 'news',
    component: NewsPage
  },
  {
    path: '/items',
    name: 'items',
    component: ItemPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
