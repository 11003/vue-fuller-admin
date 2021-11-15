"use strict";

import axios from "axios";
import {getToken} from "@/utils/auth";
import qs from 'qs-stringify';
import {message} from "@/plugins/message";
// Full config:  https://github.com/axios/axios#request-config
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
let config = {
    baseURL: process.env.VUE_APP_apiUrl,
    timeout: 10 * 1000, // Timeout
    withCredentials: true // Check cross-site Access-Control
};
let extra = {};
// create an axios instance
const service = axios.create(config);
// request interceptor
service.interceptors.request.use(
    config => {
        let token = getToken();
        if (token) {
            config.headers.token = token;
        }
        if (config.method === "post") {
            config.data = {...extra, ...config.data};
            switch (config.url) {
                case '/third-login':
                    config.data = qs(config.data);
                    break;
                default:
                    config.data = JSON.parse(JSON.stringify(config.data));
            }
        } else {
            config.params = {...extra, ...config.params};
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        message.error(error.info || '服务开了小差，请稍后重试')
        return Promise.reject(error);
    }
);

// 请求封装
const request = val => {
    let { data, url, method } = val;
    if (method === 'get' || method === 'GET') {
        return service({ url, method, params: data });
    } else {
        return service({ url, method, data });
    }
};
export default request;
