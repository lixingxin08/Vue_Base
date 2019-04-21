import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import shop from '../components/pages/shop.vue'
import { resolve } from 'url';
const shop=resolve=>require(['@/components/pages/shop'],resolve);
const Home=resolve=>require(['@/components/HelloWorld'],resolve);
// const HelloWorld=resolve=require(['@/components/HelloWorld'],resolve)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path:'/shop',
      name:'shop',
      component:shop
    }
  ]
})
