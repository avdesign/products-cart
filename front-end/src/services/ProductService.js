/**
  File Name:  /services/ProductService.js
  Description: Product service 
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

 import Api from '../axios/index.js'
 //import { API_VERSION } from '../configs/api.js'

 const END_POINT = 'products'

 export default {
    all() {
        return Api.get(END_POINT)
    },

    show(id) {
        return Api.get(`${END_POINT}/${id}`)
    }
 }