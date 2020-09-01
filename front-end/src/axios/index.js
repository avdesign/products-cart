/**
  File Name:  /axios/index.js
  Description: Config axios
  Autor: Anselmo Velame
  Email: design@anselmovelame.com.br
  Github: https://github.com/avdesign
 */

import axios from 'axios'
import { URI_BASE_API } from '../configs/api.js'

/*************************************************
  Solicitações HTTP
*************************************************/
const Api = axios.create({
    baseURL: URI_BASE_API
})

export default Api