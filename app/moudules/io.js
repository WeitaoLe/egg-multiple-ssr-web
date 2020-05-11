// import axios from 'axios'
// import Qs from 'qs'
const axios = require('axios');
const Qs = require('qs');
// Global response interceptor registion
axios.interceptors.response.use(
  response => {
    return response
  }, error => {
    // Do something with response error
    return Promise.reject(error)
  }
)

// Global request interceptor registion
axios.interceptors.request.use(
  config => {
    config.data = Qs.stringify(config.data)
    return config
  }, error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

exports.get = axios.get
exports.post = axios.post