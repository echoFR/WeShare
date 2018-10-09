import axios from 'axios'
const reqError={
    error: true,
    msg: '请求出错'
}

// 获取tag
export function getGroupTag(cb){
    axios.get('http://localhost:9999/group/tag').then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err)
        cb(reqError)
    })
}
// 获取list
export function getGroupList(id,cb){
    axios.get(`http://localhost:9999/group/list?id=${id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err)
        cb(reqError)
    })
}
// 圈子信息
export function getGroupInfo(id,cb){
    axios.get(`http://localhost:9999/group/info?id=${id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}

// 用户圈子关系
export function getRelation(user_id,group_id,cb){
    axios.get(`http://localhost:9999/group/user_group?user_id=${user_id}&group_id=${group_id}`).then((res)=>{
    cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}
// 取消关注圈子
export function deleteFollow_gruop(user_id,group_id,cb){
    axios.get(`http://localhost:9999/group/delete_follow_group?user_id=${user_id}&group_id=${group_id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}
// 添加关注圈子
export function insertFollow_group(user_id,group_id,cb){
    axios.get(`http://localhost:9999/group/insert_follow_group?user_id=${user_id}&group_id=${group_id}`).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(err);
        cb(reqError)
    })
}
