'use strict';

import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {    // 这里的config包含每次请求的内容
    // 判断localStorage中是否存在api_token
    if (localStorage.getItem('api_token')) {
    //  存在将api_token写入 request header
    config.headers.apiToken = `${localStorage.getItem('api_token')}`;
}
return config;
}, err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
});

function checkStatus (response) {
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 ||
            response.status === 400)) {
        return response
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

function checkCode (res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        alert(res.msg)
    }
    if (res.data && (!res.data.success)) {
        // alert(res.data.error_msg)
    }
    return res
}
// 请求方式的配置
export default {
    post(url, data) {  //  post
        return axios({
            method: 'post',
            baseURL: '/', //加在请求端口后的默认一级
            url,
            data: qs.stringify(data), // qs.stringify() 将对象序列化成URL的形式以 & 拼接
            timeout: 5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then((response) => {
            return checkStatus(response)
        }
    ).then((res) => {
            return checkCode(res)
        }
    )},
    get(url, params) {  // get
        return axios({
            method: 'GET',
            baseURL: '/backapis',
            url,
            params, // get 请求时带的参数
            timeout: 5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then((response) => {
            return checkStatus(response)
        }
    ).then((res) => {
            return checkCode(res)
        }
    )}
}