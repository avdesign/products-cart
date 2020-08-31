/**
  File Name:  /store/actions.js
  Description: Actions
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

 import ProductService from '../services/ProductService.js'
 import CartService from '../services/CartService.js'


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

