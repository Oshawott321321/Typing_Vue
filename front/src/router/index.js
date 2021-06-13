import { createRouter, createWebHashHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import Dashboard from '../views/Dashboard.vue'
import paragraphs from '../views/paragraphs.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homeView
  },
  {
    path: '/paragraphs',
    name: 'Paragraphs',
    component: paragraphs
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
