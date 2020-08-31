/**
  File Name:  /store/index.js
  Description: Store
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import product from './modules/products/index.js'
import cart from './modules/cart/index.js'


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
      product,
      cart
    }
})