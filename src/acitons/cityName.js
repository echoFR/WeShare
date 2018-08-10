import {UPDATE_CITYNAME} from '../constants/index'
const city= {
    update(cityName){
        return{
            type: UPDATE_CITYNAME,
            payload: cityName
        }
    }
}

export default city