import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from 'containers/App'
import store from '@/store/store'
import '@/css/fonts/iconfont'
import '@/css/reset.less'
import registerServiceWorker from './registerServiceWorker'
import '@/axios/config'
ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
