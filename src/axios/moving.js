import axios from 'axios'
const reqError={
    error: true,
    msg: '请求出错'
}

// 获取tag
export function publishMove(Form,cb){
    axios({
        url: 'http://localhost:9999/user/publish',
        method: 'post',
        anync: true,
        contentType: false, // 根据表单 input 提交的数据使用其默认的 contentType
        processData: false, // 不会将 data 参数序列化字符串
        data: Form
    }).then((res)=>{
        cb(res.data)
    }).catch((err)=>{
        console.log(reqError);
    })
}