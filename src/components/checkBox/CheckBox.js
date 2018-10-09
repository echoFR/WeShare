import React from 'react'
import './style.less'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import checkText from '@/acitons/checkText'

class CheckBox extends React.Component {
  constructor(){
    super()
    this.showCheck=this.showCheck.bind(this)
  }
  render() {
    return (
        <div ref='check' className='check-box'>
          <div>{this.props.checkText}</div>
        </div>
    )
  }
  showCheck(){  
    this.refs.check.style.opacity=1;
    this.refs.check.style.transition='opacity 1s' 
    setTimeout(()=>{
      this.refs.check.style.transition='opacity 1s' 
      this.refs.check.style.opacity=0;
    },2000)   
  }
  componentDidMount(){
    this.props.onRef(this)
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