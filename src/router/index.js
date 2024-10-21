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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CancelView.vue')
    }
  ]
})

export default router
