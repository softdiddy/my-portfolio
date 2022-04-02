import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserRegistration from '@/components/UserRegistration'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'UserRegistration',
      component: UserRegistration
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
