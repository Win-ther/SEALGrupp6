import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rentcareta',
      name: 'rentcareta',
      component: () => import('../views/RentACaretaView.vue')
    },
    {
      path: '/cancelcareta',
      name: 'cancelcareta',
      component: () => import('../views/CancelView.vue')
    },
    {
      path: '/rentcareta/:model/:id',
      name: 'careta',
      component: () => import('../views/CaretaView.vue')
    },
  ]
})

export default router
