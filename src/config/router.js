import _ from 'lodash'
import { createRouter, createWebHistory } from 'vue-router'
import { MENU } from '@/config/menu'

const routes = [
  MENU.SIGNIN,
  MENU.SIGNOUT,
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    redirect: (to) => { return { path: '/dashboard' }},
    children: [
      MENU.DASHBOARD,
      MENU.AGENT_LIST,
      MENU.PROCEDURE_LIST,
      MENU.PROCEDURE_RESULT,
      MENU.SCENARIO_LIST
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: () => import('@/components/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router