import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import CreateUser from '@/views/CreateUser'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/createUser',
    name: 'CreateUser',
    component: CreateUser,
  },
]

const router = new VueRouter({
  routes,
})

export default router
