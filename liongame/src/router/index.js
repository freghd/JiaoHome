import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import DynamicState from '@/components/DynamicState'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
			children:[
				{path: 'DynamicState',component: DynamicState},
			]
    }
  ]
})
