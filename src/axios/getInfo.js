import axios from 'axios'
const reqError={
    error: true,
    msg: '请求出错'
}
export default function getInfo(email,cb){
    axios.get(`http://localhost:9999/user/getInfo?email=${email}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}