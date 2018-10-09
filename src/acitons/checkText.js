import {UPDATE_CHECKTEXT} from '../constants/index'
const check={
    update(checkText) {
        return{
            type: UPDATE_CHECKTEXT,
            payload: checkText
        }
    },
}

export default check