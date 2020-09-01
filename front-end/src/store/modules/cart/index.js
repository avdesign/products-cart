/**
  File Name:  /store/modules/cart/index.js
  Description: Module Cart
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

 