import {combineReducers} from 'redux'

import email from './email'
import checkText from './checkText'
import user_info from './user_info'
const reducer=combineReducers(
    {
        email: email,
        checkText: checkText,
        user_info: user_info,
    }
)
export default reducer