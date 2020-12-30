import Vue from "vue";
import axios from 'axios'
import VueAxios from "vue-axios";


Vue.use(VueAxios, axios);

import {
    baseApi
} from '../config'
/* 全局默认配置 */
var http = axios.create({
    baseURL: baseApi,
    timeout: 5000
})
/* 请求拦截器 */
http.interceptors.request.use(
    config => {
        config.headers.timestamp = Math.floor(new Date().getTime() / 1000)
        config.headers.token = localStorage.getItem('token') || ''
        config.headers["Content-Type"] ? "" : config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
/* 响应拦截器 */
http.interceptors.response.use(
    res => {
        return res
    },
    error => {
        return Promise.reject(error)
    }
)

function get(url, data, config) {
    console.log("🚀 ~ file: myAxios.js ~ line 39 ~ get ~ data", data)
    return new Promise((resolve, reject) => {
        http.get(url, {
                params: data,
                headers: config || {}
            }).then(
                response => {
                    resolve(response.data)
                },
                err => {
                    reject(err)
                }
            )
            .catch(error => {
                reject(error)
            })
    })
}

function post(url, data, config) {
    return new Promise((resolve, reject) => {
        http.post(url, data, config).then(
                response => {
                    resolve(response.data)
                },
                err => {
                    reject(err)
                }
            )
            .catch(error => {
                reject(error)
            })
    })
}

export {
    get,
    post
}