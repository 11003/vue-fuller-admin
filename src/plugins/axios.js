"use strict";

import axios from "axios";
import {Message, Loading} from "element-ui";
import {getToken} from "@/utils/auth";
import qs from 'qs-stringify';
// Full config:  https://github.com/axios/axios#request-config
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
let msgTimeout = 3000;
let config = {
    baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_apiUrl : '',
    timeout: 10 * 1000, // Timeout
    withCredentials: true // Check cross-site Access-Control
};
let extra = {};
// create an axios instance
const service = axios.create(config);
var loading;
// request interceptor
service.interceptors.request.use(
    config => {
        let param = config.data || config.params;
        if (param && "noloading" in param) {
            delete param.noloading;
            param = null;
        } else {
            loading = Loading.service({
                fullscreen: true,
                body: true,
                lock: true,
                background: "rgba(255,255,255,0)",
                text: "努力加载中..."
            });
        }
        if (config.method === "post") {
            config.data = {...extra, ...config.data};
            config.data = qs(config.data);
        } else {
            config.params = {...extra, ...config.params};
        }
        if (getToken()) {
            config.headers["token"] = getToken();
        }
        return config;
    },
    error => {
        Message.error(error, msgTimeout);
        loading.close();
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;
        loading.close();
        return res;
    },
    error => {
        loading.close();
        window.console.log("err" + error); // for debug
        return Promise.reject(error);
    }
);

export default {
    http: service,
    install(Vue) {
        Vue.axios = service;
        window.axios = service;
        Object.defineProperties(Vue.prototype, {
            axios: {
                get() {
                    return service;
                }
            },
            $axios: {
                get() {
                    return service;
                }
            }
        });
    }
};
