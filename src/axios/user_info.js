import axios from 'axios'
import qs from 'qs';

const reqError={
    error: true,
    msg: '请求出错'
}
// 修改用户信息
export function modifyInfo(user_id,type,newValue,cb){
    axios.get(`http://localhost:9999/user/modify_info?user_id=${user_id}&type=${type}&newValue=${newValue}`).then((res)=>{
    cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}

// 修改用户密码
export function modifyPass(email,old_pass,new_pass,cb){
    const url= `http://localhost:9999/user/modify_pass`
    const data = {email: email, old_pass: old_pass,new_pass: new_pass};
    console.log(data)
    axios.post(
        url,
        qs.stringify(data),
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
    ).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}