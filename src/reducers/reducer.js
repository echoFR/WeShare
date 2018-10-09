import {combineReducers} from 'redux'

import cityName from './cityName'
import email from './email'
import checkText from './checkText'
const reducer=combineReducers(
    {
        cityName: cityName,
        email: email,
        checkText: checkText
    }
)
export default reducer