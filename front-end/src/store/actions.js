/**
  File Name:  /store/actions.js
  Description: Actions
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

 import axios from 'axios'

 export const getProducts = ({ commit }) => {
   axios.get(`http://127.0.0.1:8000/api/products`)
    .then(response => {
      commit('SET_PRODUCTS', response.data)
    })
 }


 export const getProduct = ({ commit }, productId) => {
  axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
   .then(response => {
    commit('SET_PRODUCT', response.data)
   })
} 