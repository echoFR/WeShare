import axios from 'axios'
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