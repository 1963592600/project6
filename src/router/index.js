import Vue from 'vue'
import Router from 'vue-router'


import home from '@/pages/home.vue'
import order from '@/pages/order.vue'
import search from '@/pages/search.vue'
import person from '@/pages/person.vue'
import login from '@/pages/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        show:true
      }
    },
    {
      path:'/order',
      component:order,
      meta:{
        show:true
      }
    },
    {
      path:'/search',
      component:search,
      meta:{
        show:true
      }
    },
    {
      path:'/person',
      component:person,
      meta:{
        show:true
      }
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
