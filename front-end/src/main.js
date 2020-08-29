/**
  File Name:  /main,js
  Description: Main File 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
//import store from './store.js'




import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// routes
Vue.use(VueRouter)
const router = new VueRouter({
  routes:routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  //store,
  render: h => h(App),
}).$mount('#app')
