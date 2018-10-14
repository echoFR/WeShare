import React from 'react';
import RouteConfig from '@/router/router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import checkText from '@/acitons/checkText'

import CheckBox from 'components/checkBox/CheckBox'
import {BrowserRouter as Router} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <CheckBox/>   
        <RouteConfig />
      </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return{
    checkText: state.checkText
  }
}
function mapDispatchToProps(dispatch){
  return {
    checkTextActions: bindActionCreators(checkText,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)