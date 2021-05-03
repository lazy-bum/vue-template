import { createRouter, createWebHistory  } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'page1',
        component: () => import('@/views/page1/index.vue')
      },
      {
        path: 'page2',
        component: () => import('@/views/page2/index.vue')
      },
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'ErrorPage', component: () => import('@/pages/error/error-page.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
