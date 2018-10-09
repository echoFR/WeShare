import axios from 'axios'
import qs from 'qs';
const reqError={
    error: true,
    data: '请求出错'
}

export function userLogin(email,pass,cb){
    const url='http://localhost:9999/user/login'
    const data={
        email: email,
        pass: pass
    }
    axios.post(
        url, 
        qs.stringify(data), 
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
    ).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err)
        cb(reqError)
    })
}