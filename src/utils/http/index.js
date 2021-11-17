import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { findIndex } from 'lodash'
import router from '@/router'
// import qs from 'qs'
// import router from '@/router'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
console.log(process.env)
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
const config = {
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 120 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
}
const pending = new Map()
// 哪些接口可以多次请求不会cancel
const excludeUrl = ['/monitor_object', '/notice']
//  qs.stringify(config.params), qs.stringify(config.data)
const addPending = (config) => {
    const isInExcludeUrl =
        findIndex(excludeUrl, (o) => {
            return o.search(config.url) >= 0
        }) >= 0
    if (isInExcludeUrl) {
        return
    }
    const url = [config.method, config.url].join('&')
    config.cancelToken =
        config.cancelToken ||
        new axios.CancelToken((cancel) => {
            if (!pending.has(url)) {
                // 如果 pending 中不存在当前请求，则添加进去
                pending.set(url, cancel)
            }
        })
}
/**
 * 移除请求
 * @param {Object} config
 */
//  qs.stringify(config.params), qs.stringify(config.data)
const removePending = (config) => {
    const url = [config.method, config.url].join('&')
    if (pending.has(url)) {
        // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
        const cancel = pending.get(url)
        cancel(url)
        pending.delete(url)
    }
}
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
const clearPending = () => {
    for (const [url, cancel] of pending) {
        cancel(url)
    }
    pending.clear()
}
const _axios = axios.create(config)

_axios.interceptors.request.use(
    (cfg) => {
        // Do something before request is sent
        const { token } = store.getters
        if (token) {
            cfg.headers.common['Authorization'] = token
        }
        removePending(cfg) // 在请求开始前，对之前的请求做检查取消操作
        addPending(cfg) // 将当前请求添加到 pending 中
        return cfg
    },
    (err) => {
        // Do something with request error
        return Promise.reject(err)
    }
)

// Add a response interceptor
_axios.interceptors.response.use(
    (res) => {
        // Do something with response data
        removePending(res) // 在请求结束后，移除本次请求
        const { status } = res
        if (status === 200) {
            return res.data
        } else if (status === 400) {
            router.replace({
                name: 'Login',
            })
        } else {
            const { message } = res.data

            const messageInstance = Message.error(message)
            return Promise.reject({ err: res.data, messageInstance: messageInstance })
        }
    },
    (err) => {
        // Do something with response error
        let messageInstance
        if (axios.isCancel(err)) {
            console.log('repeated request: ' + err.message)
        } else {
            // messageInstance = Message.error(err.response.data.errmsg)
            messageInstance = Message.error('服务器开小差了，请刷新重试')
        }
        return Promise.reject({ err: err, messageInstance: messageInstance })
    }
)
const $axios = _axios
const $axiosAll = axios.all
const $axiosSpread = axios.spread
const $CancelToken = axios.CancelToken
export { $axios, $axiosAll, $axiosSpread, $CancelToken, clearPending }
