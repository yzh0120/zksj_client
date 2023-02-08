import axios from 'axios';
import md5 from "js-md5"
import {
  Message,
  MessageBox
} from 'element-ui';
import Cookies from 'js-cookie'
//路由配置
import router from '@/router'
import {
  getCookie
} from '@/utils/auth.js';

const service = axios.create({
  // 直接走数据服务接口的处理
  // baseURL: process.env.VUE_APP_BASE_dataServe_API,

  // 通过转发的方式
  baseURL: process.env.VUE_APP_BASE_API + "/dataSerive/proxy",
  timeout: 120000
})

service.interceptors.request.use(
  config => {
    // 直接走数据服务接口的处理
    // config.headers = (config.headers, {
    //   "timespan": process.env.VUE_APP_timespan,
    //   "token": process.env.VUE_APP_TOKEN,
    // })

    // 通过转发的方式
    config.headers = {
      "Authorization": getCookie("token") || ""
    }

    if (config.method == "get") {
      config.params = Object.assign(config.params, {
        key: process.env.VUE_APP_key
      })
      if (config.params.queryRootBean) {
        config.params.queryRootBean = encodeURI(JSON.stringify(config.params.queryRootBean))
      }
    } else if (config.method == "post") {
      if (config.url.includes("?")) {
        config.url = config.url + `&key=${process.env.VUE_APP_key}`
      } else {
        config.url = config.url + `?key=${process.env.VUE_APP_key}`
      }

    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)
//http response 拦截器
service.interceptors.response.use(
  response => {
    // console.log(response, "response")
    if (response.status === 200) { // 如果状态码是200  会执行.then的第一个函数
      return Promise.resolve(response.data)
    } else { //除了200 在2xx的范围 会执行.then的第二个函数  Promise.reject(res)  1
      return Promise.reject(response)
    }
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求'
          break;
        case 401:
          // err.message = '未授权，请重新登录';
          MessageBox.alert("未授权，请重新登录", "提示", {
            confirmButtonText: '确定',
            callback: action => {
              Cookies.remove('userToken');
              router.push({
                name: 'Login'
              });
              window.location.reload();
            }
          })
          break;
        case 403:
          // err.message = '拒绝访问'
          MessageBox.alert("登录超时，请重新登录", "提示", {
            confirmButtonText: '确定',
            callback: action => {
              Cookies.remove('userToken');
              router.push({
                name: 'login'
              }).then(() => {
                window.location.reload();
              })
            }
          })
          break;
        case 404:
          err.message = '请求错误,未找到该资源'
          break;
        case 405:
          err.message = '请求方法未允许'
          break;
        case 408:
          err.message = '请求超时'
          break;
        case 500:
          err.message = '服务器端出错'
          break;
        case 501:
          err.message = '网络未实现'
          break;
        case 502:
          err.message = '网络错误'
          break;
        case 503:
          err.message = '服务不可用'
          break;
        case 504:
          err.message = '网络超时'
          break;
        case 505:
          err.message = 'http版本不支持该请求'
          break;
        default:
          err.message = `连接错误${err.response.status}`
      }
    } else {
      err.message = "连接到服务器失败"
    }
    // Message({
    //   message: err.message,
    //   type: 'error',
    //   duration: 3 * 1000
    // })

    if (err.response.status !== 403) {
      Message({
        message: err.message,
        type: 'error',
        duration: 3 * 1000
      })
    }

    return Promise.reject(err.response);
  }
)

export default service;
