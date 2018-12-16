import axios from 'axios'
import { Indicator } from 'mint-ui'

const $http = axios.create({
  baseURL: 'http://quan.lukou.com/api'
})

$http.interceptors.request.use(config => {
  Indicator.open('加载中....')
  return config
})
$http.interceptors.response.use(resp => {
  Indicator.close()
  return resp
})
export default $http
