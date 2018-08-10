import {UPDATE_CITYNAME} from 'constants/index'

export default function cityName(state='',action){
    switch(action.type){
        case UPDATE_CITYNAME:
           return action.payload
        default:
            return state
    }
}