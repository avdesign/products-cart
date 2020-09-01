/**
  File Name:  /store/modules/products/mutations.js
  Description: Module mutations product
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

export const SET_PRODUCTS = (state, products) => {
  state.products = products
}

export const SET_PRODUCT = (state, product) => {

  state.product = product
}
