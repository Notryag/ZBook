import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    //Moon组件改为你自己的某个组件
    {
      path: '/manage',
      component: () => import('../views/manage/index.vue'),
      children: [
        {
          path: 'article',
          name: 'articleList',
          component: () => import('../views/manage/article/index.vue'),
        },
        {
          path: 'article/add',
          component: () => import('../views/manage/article/add/index.vue'),
        },
      ],
    },
    {
      path: '/home',
      component: () => import('../views/home/index.vue'),
      children: [
        { path: 'article', component: () => import('../views/home/article/index.vue') },
        { path: 'aboute', component: () => import('../views/home/aboute/index.vue') },
        { path: 'commont', component: () => import('../views/home/commont/index.vue') },
      ],
    },
  ],
})
export default router
