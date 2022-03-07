import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/product',
    name: 'product',
    component:() => import('../views/product.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component:() => import('../views/contact.vue')
  },
  {
    path: '/newarival',
    name: 'newarival',
    component:() => import('../views/newarival.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
