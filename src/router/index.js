
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Tui from '../components/Tui.vue'
import Nong from '../components/Nong.vue'
import Xiang from '../components/Xiang.vue'
import Search from '../components/Search.vue'
import Weather from '../components/Weather.vue'
import strong from '../components/strong.vue'
import zuqiu from '../components/zuqiu.vue'
import dianjing from '../components/dianjing.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes : [ 
  		{
  			path:'/tui',
  			name:'tui',
  			component : Tui,
  			children : [
  				{
  					path:'xiang',
  					name: 'xiang',
  					component : Xiang 
  				}
  			]
  		},
  		{
  			path : '/nong',
  			name : 'nong',
  			component : Nong
  		},
      {
      path : '/weather',
      name : 'weather',
      component : Weather
      },
  		{
  			path : '/search',
  			name : 'search',
  			component : Search
  		},
      {
        path : '/strong',
        name : 'strong',
        component : strong
      },
      {
        path : '/zuqiu',
        name : 'zuqiu',
        component : zuqiu
      },
      {
        path : '/dianjing',
        name : 'dianjing',
        component : dianjing
      },
       {
            path : '/*',
            redirect : '/tui'  
       }
  ]
})
