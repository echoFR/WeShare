import {UPDATE_EMAIL} from '../constants/index'

const email= {
    update(email){
        return{
            type: UPDATE_EMAIL,
            payload: email
        }
    }
}

export default email