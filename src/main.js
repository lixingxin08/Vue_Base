// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import 'normalize.css/normalize.css'
import './css/base.css'
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import './config/rem.js'
Vue.use(VueRouter)
Vue.use(Vuex)
import router from './router'
Vue.config.productionTip = false
 import api from './js/api_config.js'
 import axios from './js/axios_config' 
 Vue.prototype.$htttp=axios;
 Vue.prototype.$api=api;
 //解决移动端点击300ms延迟问题
 import FastClick from 'fastclick'
if('addEventListener' in document){
   document.addEventListener('DOMContentLoaded',function(){
     FastClick.attach(document.body)
   },false)
}
// 拦截器
let instance=axios.create({timeout:5000});
// instance.defaults.headers.common['Authorization'] = "Bearer " + getCookie("userToken");//携带cookie
//instance.defaults.withCredentials = true;//让ajax携带cookie
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  res => res.status===200?Promise.resolve(res):Promise.reject(res),
  error => {
   const {response}=error;
   if (response) {
     errorHandle(response.status,response.data.massage)
   }else{
     console.log("断网了");
     
   }
  }
);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
