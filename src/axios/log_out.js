import axios from 'axios'
const reqError={
    error: true,
    msg: '请求失败'
}
export default function log_out(cb){
    axios.get(`http://localhost:9999/user/log_out`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}