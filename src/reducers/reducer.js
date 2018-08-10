import {combineReducers} from 'redux'
import cityName from './cityName'
const reducer=combineReducers(
    {
        cityName: cityName,
    }
)
export default reducer