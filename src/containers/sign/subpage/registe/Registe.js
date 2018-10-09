import React from 'react'
import './style.less'
import {registeCode,checkCode} from '@/axios/registe'
import {userLogin} from '@/axios/login'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import email from '@/acitons/email'
import checkText from '@/acitons/checkText'

import {checkPass,checkEmpty} from '@/util/util'
class Registe extends React.Component {
  constructor(){
    super()
    this.getCode= this.getCode.bind(this)
    this.registe= this.registe.bind(this)
  }
  // 获取验证码
  getCode(){
    this.props.checkTextAction.update('获取验证码')                
    const reg= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    let email = this.refs.mailbox.value
    if(checkEmpty(email)){
      this.props.checkTextAction.update('邮箱输入不能为空')            
      return
    }
    if(checkPass(reg,email)){ 
      registeCode(email,(data)=>{ 
        this.props.checkTextAction.update(data.data)          
      })
      return
    }
    this.props.checkTextAction.update('邮箱格式不正确')          
  }
  // 注册
  registe(){
    this.props.checkTextAction.update('注册')                
    let email = this.refs.mailbox.value    
    let code= this.refs.code.value
    let pass= this.refs.pass.value
    const reg= /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,}|(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[0-9])(?=.*[^A-Za-z0-9])|).{8,16}$/
    if(checkEmpty(email)){
      this.props.checkTextAction.update('邮箱输入不能为空')          
      return
    }
    if(checkEmpty(code)){
      this.props.checkTextAction.update('激活码输入不能为空')          
      return
    }
    if(checkEmpty(pass)){
      this.props.checkTextAction.update('密码输入不能为空')          
      return
    }
    if(!checkPass(reg,pass)){
      this.props.checkTextAction.update('密码必须为8-16位(字母、数字特殊字符的组合)')          
      return
    }
    checkCode({code: code, pass: pass},(data)=>{
      if(data.error){
      this.props.checkTextAction.update(data)          
      }else{
        // 登录
        userLogin(email,pass,(data)=>{
          if(data.error){
            this.props.checkTextAction.update(data)          
            return
          }
          // redux
          this.props.emailAction.update(email)
          // localStorage
          localStorage.setItem('email',email)
          this.props.history.replace('/home/my')
        })        
      }
    })
  }
  render() {
    return (
      <div className="registe">
        <div className='registe-form'>
            <p>邮箱</p>
            <input type='text' ref='mailbox'/>
            <p>激活码</p>        
            <input type='text' className='code-box' ref='code'/>
            <span className='get-code' onClick={this.getCode}>| 获取激活码</span>
            <p>密码(6-16位)</p>
            <div className='pass-box'>
              <input type='type' className='password' ref='pass'/>
              <div className='eyes'>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-back"></use>
                </svg>
              </div>
            </div>
        </div>
        <div className='registe-btn' onClick={this.registe}>注册</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    email: state.email,
    checkText: state.checkText
  }
}
function mapDispatchToProps(dispatch){
  return{
    emailAction: bindActionCreators(email,dispatch),
    checkTextAction: bindActionCreators(checkText,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registe);