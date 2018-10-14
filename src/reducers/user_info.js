import {UPDATE_USERINFO,LOG_OUT,ADD_FOLLOW,REDUCE_FOLLOW,MODIFY} from 'constants/index'

const initialState = (new Date().getTime()) - localStorage.getItem('login_time')  <= 60000*30 
 ? 
    JSON.parse(localStorage.getItem('user_info'))   //还没有过期
    :{    //过期了
    user_id: 0,
    username: '',
    password: '',
    avatar: '',
    fans_num: 0,
    follow_num: 0,
    moving_num: 0,
    signature: '',
    regist_time: '',
    email: ''
}
export default function user_info(state=initialState,action){
    switch(action.type){
        case UPDATE_USERINFO:
            localStorage.setItem('user_info',JSON.stringify(action.payload))
            return action.payload
        case LOG_OUT:
            localStorage.removeItem('user_info');
            return {    //退出登录
                user_id: 0,
                username: '',
                password: '',
                avatar: '',
                fans_num: 0,
                follow_num: 0,
                moving_num: 0,
                signature: '',
                regist_time: '',
                email: ''
            }
        case ADD_FOLLOW: 
            const before_follow_num= state.follow_num
            localStorage.setItem('user_info',JSON.stringify(Object.assign({}, state, { follow_num: before_follow_num+1 })))            
            return Object.assign({}, state, { follow_num: before_follow_num+1 })
        case REDUCE_FOLLOW:
            const num = state.follow_num
            localStorage.setItem('user_info',JSON.stringify(Object.assign({}, state, { follow_num: num-1 })))            
            return Object.assign({}, state, { follow_num: num-1 })
        case  MODIFY:
            console.log(state);
            console.log(action);
            
        default: return state
    }
}