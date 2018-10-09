import React from 'react';
import RouteConfig from '@/router/router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import cityName from '@/acitons/cityName'
import email from '@/acitons/email'
import checkText from '@/acitons/checkText'

import CheckBox from 'components/checkBox/CheckBox'
import {BrowserRouter as Router} from 'react-router-dom'
class App extends React.Component {
  constructor(){
    super()
    this.onRef= this.onRef.bind(this)
  }
  onRef(ref){
    this.child= ref
  }
  render() {
    return (
      <Router>
      <div>
        <CheckBox onRef={this.onRef}/>   
        <RouteConfig />
      </div>
      </Router>
    );
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.checkText!==''){
      this.child.showCheck()
    }
  }
}

function mapStateToProps(state){
  return{
    cityName: state.cityName,
    email: state.email,
    checkText: state.checkText
  }
}
function mapDispatchToProps(dispatch){
  return {
    cityNameAcitons: bindActionCreators(cityName,dispatch),
    emailAction: bindActionCreators(email,dispatch),
    checkTextActions: bindActionCreators(checkText,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)