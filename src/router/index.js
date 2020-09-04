import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Page/Home'
import ListData from '../components/ListData'
import LeftSidebar from '../components/LeftSidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/ListData',
      name:'ListData',
      component:ListData
    },
    {
      path:'/LeftSidebar',
      name:'LeftSidebar',
      component:LeftSidebar
    }
  ]
})
