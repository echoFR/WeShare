import axios from 'axios'

// 获取tag
export function getGroupTag(cb){
    axios.get('http://localhost:9999/group/tag').then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb({
            error: true,
            msg: '请求出错'
        })
    })
}

// 获取list
export function getGroupList(id,cb){
    axios.get(`http://localhost:9999/group/list?id=${id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb({
            error: true,
            msg: '请求出错'
        })
    })
}
