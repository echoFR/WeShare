import {UPDATE_CHECKTEXT} from 'constants/index'
export default function checkText(state='',action){
    switch(action.type){
        case UPDATE_CHECKTEXT:
            return action.payload
        default: return state
    }
}