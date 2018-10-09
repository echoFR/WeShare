import axios from 'axios'
import qs from 'qs';
const reqError={
    error: true,
    data: '请求出错'
}

// 获取激活码
export function registeCode(email,cb){
    const url= 'http://localhost:9999/user/code'
    const data = {email: email};
    axios.post(
        url, 
        qs.stringify(data), 
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
    ).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        cb(reqError)
        console.log(err)
    })
}
// 注册
export function checkCode(data,cb){
    const url= 'http://localhost:9999/user/checkCode'
    axios.post(
        url,
        qs.stringify(data), 
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
    ).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        cb(reqError)
        console.log(err)
    })
}