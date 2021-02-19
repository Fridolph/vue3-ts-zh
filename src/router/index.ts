import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index'
import DemoLayoutHMF from '@/components/layout/DemoLayoutHMF.vue'
import BaseLayout from '@/components/layout/BaseLayout.vue'
import ColumnList from '@/views/ColumnList/index.vue'
import NotFound from '@/views/NotFound/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DemoLayoutHMF,
    redirect: '/demo',
    children: [
      {
        name: 'Demo',
        path: '/demo',
        component: () => import(/* webpackChunkName: "Demo" */ '../views/Demo/index.vue'),
        meta: { requiredLogin: true }
      },
    ],
  },
  {
    path: '/',
    component: BaseLayout,
    redirect: '/columnList',
    children: [
      {
        name: 'ColumnList',
        path: '/columnList',
        component: ColumnList,
        meta: {
          title: '栏目列表',
        },
      },
      {
        name: 'ColumnDetail',
        path: '/columnDetail',
        component: () => import(/* webpackChunkName: "ColumnDetail" */ '../views/ColumnDetail/index.vue')
      },
      // {
      //   name: 'createColumn',
      //   path: '/create_column',
      //   component: () => import(/* webpackChunkName: "CreateColumn" */ '../views/CreateColumn/index.vue'),
      //   meta: { requiredLogin: true }
      // },
      // {
      //   name: 'createArticle',
      //   path: '/create_article',
      //   component: () => import(/* webpackChunkName: "createArticle" */ '../views/CreateArticle/index.vue'),
      //   meta: { requiredLogin: true }
      // },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录页',
    },
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login/Login.vue')
  },
  {
    name: 'Register',
    path: '/register',
    meta: {
      title: '注册页',
    },
    component: () => import(/* webpackChunkName: "Register" */ '../views/Login/Register.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {
      title: '404__未找到页面',
    },
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from ,next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next('/login')
  } else if (to.meta.auth) {
    next('/login')
  } else {
    next()
  }
})

export default router
