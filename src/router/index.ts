import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TodoList from '../views/TodoList/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: TodoList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
