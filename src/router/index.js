import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      customerEmail: 'home',
      component: HomeView
    },
    {
      path: '/rentcareta',
      customerEmail: 'rentcareta',
      component: () => import('../views/RentACaretaView.vue')
    },
    {
      path: '/cancelcareta',
      customerEmail: 'cancelcareta',
      component: () => import('../views/CancelView.vue')
    },
    {
      path: '/rentcareta/:model/:id',
      customerEmail: 'careta',
      component: () => import('../views/CaretaView.vue')
    },
  ]
})

export default router
