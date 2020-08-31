/**
  File Name:  /store/modules/cart/actions.js
  Description: Module actions cart
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import CartService from '@/services/CartService.js'

export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit('ADD_TO_CART', { product, quantity })

  CartService.store({
    product_id: product.id,
    quantity
  })
}

export const getCartItems = ({ commit }) => {
  CartService.all().then(response => {
    commit('SET_CART', response.data)
  })  
}


export const removeProductCart = ({ commit }, product) => {
  commit('REMOVE_PRODUCT_CART', product)
  CartService.delete(product.id)
}

export const clearCartItems = ({ commit }) => {
  commit('CLEAR_CART_ITEMS')
  CartService.deleteAll()
}
