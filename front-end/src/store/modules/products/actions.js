/**
  File Name:  /store/modules/products/actions.js
  Description: Module actions product
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import ProductService from '@/services/ProductService.js'

export const getProducts = ({ commit }) => {
  ProductService.all().then(response => {
      commit('SET_PRODUCTS', response.data)
    })
}


export const getProduct = ({ commit }, productId) => {
  ProductService.show(productId).then(response => {
    commit('SET_PRODUCT', response.data)
  })
}