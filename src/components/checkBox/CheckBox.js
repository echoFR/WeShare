import React from 'react'
import './style.less'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import checkText from '@/acitons/checkText'

class CheckBox extends React.Component {
  render() {
    return (
        <div ref='check' className='check-box' id='check-box'>
          <div>{this.props.checkText}</div>
        </div>
    )
  }
}
function mapStateToProps(state){
  return{
    checkText: state.checkText
  }
}
function mapDispatchToProps(dispatch){
  return {
    checkTextAction: bindActionCreators(checkText,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckBox)