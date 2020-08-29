/**
  File Name:  /main,js
  Description: Main File 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import Vue from 'vue'
import App from './App.vue'
import store from './store'




Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
