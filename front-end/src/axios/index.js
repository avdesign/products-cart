/**
  File Name:  /axios/index.js
  Description: Config axios
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import axios from 'axios'
//import {URI_BASE_API } from '../configs/api.js'

const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})

export default Api