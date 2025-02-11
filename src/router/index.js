import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/src/views/LoginPage.vue'


const routes = [
  
  
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
