import {createStore,applyMiddleware} from 'redux'
import reducer from 'reducers/reducer'
import reduxThunk from 'redux-thunk'
const store= createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(reduxThunk))
export default store