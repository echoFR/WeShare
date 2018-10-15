import {UPDATE_USERINFO, LOG_OUT,ADD_FOLLOW,REDUCE_FOLLOW} from '../constants/index'
const user_info= {
    update(user_info){
        return{
            type: UPDATE_USERINFO,
            payload: user_info
        }
    },
    log_out(){
        return{
            type: LOG_OUT,
        }
    },
    add_follow(){
        return{
            type: ADD_FOLLOW,
        }
    },
    reduce_follow(){
        return{
            type: REDUCE_FOLLOW,
        }
    },
}

export default user_info