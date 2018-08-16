import axios from 'axios'
// axios拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log('请求前');
    return config;
  }, function (error) {
    console.log("请求错误");
    return Promise.reject(error);
});
  
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log('请求成功');
    return response;
    }, function (error) {
    // 对响应错误做点什么
    // console.log("响应错误");  
    return Promise.reject(error);
});