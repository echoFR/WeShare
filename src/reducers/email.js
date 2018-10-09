import {UPDATE_EMAIL} from '../constants/index'

export default function email(state=null,action){
    switch(action.type){
        case UPDATE_EMAIL: 
            return action.payload
        default: 
            return state
    }
} 