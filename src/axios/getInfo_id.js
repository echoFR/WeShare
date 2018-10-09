import axios from 'axios'
const reqError={
    error: true,
    msg: '请求出错'
}
export default function getInfo_id(id,cb){
    axios.get(`http://localhost:9999/user/getInfo_id?id=${id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}