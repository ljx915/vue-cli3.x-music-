import Vue from 'vue'
import Router from 'vue-router'

import Rank from '@/pages/home/Rank.vue'
import Recommend from '@/pages/home/Recommend.vue'
import Search from '@/pages/home/Search.vue'
import Singer from '@/pages/home/Singer.vue'
import User from '@/pages/user-center/User.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {path:'/',redirect:'/recommend'},
    {path:"/recommend",component:Recommend},
    {path:'/rank',component:Rank},
    {path:'/search',component:Search},
    {path:'/singer',component:Singer},
    {path:'/user',component:User}
  ]
})
