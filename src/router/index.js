import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Page/Home'
import Testpaging from '../components/Testpaging'
import ListData from '../components/ListData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Testpaging',
      name:'Testpaging',
      component:Testpaging
    },
    {
      path:'/ListData',
      name:'ListData',
      component:ListData
    }
  ]
})
