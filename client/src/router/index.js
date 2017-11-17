import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Data from '@/components/data/Data'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'

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
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    }
  ]
})
