import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vfooter from "@/components/vfooter"
import loadCompo from "@/view/load.vue"
import operaCompo from "@/view/operation"
import formCompo from "@/view/formOpera"
import formShow from "@/view/formShow"
import personPage from "@/view/person"
import graph from "@/view/graph"
import columnManage from "@/view/columnManage"
import userManage from "@/view/userManage"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
    	path:"/f",
    	name:"f",
    	component:vfooter
    },
    {
    	path:"/load",
    	name:"loadRouter",
    	component:loadCompo
    },
    {
      path:"/opera",
      name:"operaCompo",
      component:operaCompo
    },
    {
      path:"/form",
      name:"formCompo",
      component:formCompo
    },
    {
      path:"/show",
      name:"formShow",
      component:formShow
    },
    {
      path:"/person",
      name:"personPage",
      component:personPage
    },
    {
      path:"/graph",
      name:"graph",
      component:graph
    },
    {
      path:"/columnManage",
      name:"columnManage",
      component:columnManage
    },
    {
      path:"/userManage",
      name:"userManage",
      component:userManage
    }
  ]
}) 
