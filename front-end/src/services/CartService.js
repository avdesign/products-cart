/**
  File Name:  /services/CartService.js
  Description: Cart service 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

 import Api from '../axios/index.js'
 import { API_VERSION } from '../configs/api.js'

 const END_POINT = 'cart'

 export default {

    all() {
        return Api.get(`${API_VERSION}/${END_POINT}`)
    },

    store(data) {
        return Api.post(`${API_VERSION}/${END_POINT}`, data)
    },

    delete(id) {
        return Api.delete(`${API_VERSION}/${END_POINT}/${id}`)
    },

    deleteAll() {
        return Api.delete(`${API_VERSION}/${END_POINT}`)
    }

 }