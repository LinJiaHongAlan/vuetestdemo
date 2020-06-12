//封装ajax请求的函数
import axios from 'axios'
import qs from 'qs'

//添加请求拦截器
axios.interceptors.request.use(function (config) {
    const {method, data} = config
    if(method.toLowerCase() === "post" && typeof data === 'object') {
        config.data = qs.stringify(data)
    }
    return config
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
    }, function () {
    // 对响应错误做点什么
    console.log("请求出错了")
    return new Promise(() => {})
});

export default axios




