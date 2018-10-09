import axios from 'axios'
const reqError={
    error: true,
    msg: '请求出错'
}
// 获取关系
export function getRelation(user_id,other_id,cb){
    axios.get(`http://localhost:9999/user/get_relation?user_id=${user_id}&other_id=${other_id}`).then((res)=>{
    cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}
// 取消关注
export function deleteFollow(user_id,follow_id,cb){
    axios.get(`http://localhost:9999/user/delete_follow?user_id=${user_id}&follow_id=${follow_id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}
// 添加关注
export function insertFollow(user_id,follow_id,cb){
    axios.get(`http://localhost:9999/user/insert_follow?user_id=${user_id}&follow_id=${follow_id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}

// 获取粉丝列表
export function getFans(user_id,cb){
    axios.get(`http://localhost:9999/user/getFans_list?id=${user_id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}

// 获取关注列表
export  function getFollows(user_id,cb){
    axios.get(`http://localhost:9999/user/getFollow_list?id=${user_id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}