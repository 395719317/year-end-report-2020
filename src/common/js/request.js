import axios from 'axios'
import {
  Toast
} from 'vant'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    // if (getToken()) {
    //   config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    console.log('window.token request',sessionStorage.getItem("token"));
    config.headers['Authorization'] = 'Bearer '+sessionStorage.getItem("token") || '';
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(res => {
    const code = res.data.code
    if (code !== 200) {
      console.log('res.data.code1111' + res.data.msg)
      Toast(res.data.msg);
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    Toast(error.message)
    return Promise.reject(error)
  }
)

export default service
