import Vue from 'vue'
import Router from 'vue-router'
import OrdersList from '@/components/orders-list'
import Login from '@/components/login'
import SignUp from '@/components/signUp'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/order-list',
      name: 'orders-list',
      component: OrdersList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
  ]
})
