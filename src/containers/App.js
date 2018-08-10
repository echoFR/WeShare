import React from 'react';
import RouteConfig from '@/router/router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import cityName from '@/acitons/cityName'
import {BrowserRouter as Router} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <RouteConfig />
      </div>
      </Router>
    );
  }
  componentDidMount(){
    let cityName = localStorage.getItem('cityName')
    if(cityName == null){
      cityName = '西安'
    }
    this.props.cityNameAcitons.update(cityName)
  }
}
function mapStateToProps(state){
  return{
    cityName: state.cityName
  }
}
function mapDispatchToProps(dispatch){
  return {
    cityNameAcitons: bindActionCreators(cityName,dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)