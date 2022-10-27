import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuItems from '../views/MenuItems.vue'
import VegStarterItems from '../views/VegStarterItems.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menuitems',
    name: 'MenuItems',
    component: MenuItems
  },
  {
    path: '/vegstarteritems',
    name: 'VegStarterItems',
    component: VegStarterItems
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
