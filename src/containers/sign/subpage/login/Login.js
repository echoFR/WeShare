import React from 'react';
import './style.less'
import {checkPass,checkEmpty} from '@/util/util'
import {userLogin} from '@/axios/login'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import checkText from '@/acitons/checkText'
import user_info from '@/acitons/user_info'

import showCheck from '@/util/showCheck'

class Login extends React.Component {
  constructor(){
    super()
    this.toLogin=this.toLogin.bind(this)
    this.upCheckBox=this.upCheckBox.bind(this)    
  }
  upCheckBox(text){
    showCheck()
    this.props.checkTextAction.update(text)
  }
  toLogin(){
    const email= this.refs.email.value
    const pass= this.refs.pass.value
    const emailReg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    const passReg= /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,}|(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[0-9])(?=.*[^A-Za-z0-9])|).{8,16}$/
    if(checkEmpty(email)){
      this.upCheckBox('邮箱输入为空')
      return
    }
    if(!checkPass(emailReg,email)){
      this.upCheckBox('邮箱格式都输错了')
      return
    }
    if(checkEmpty(pass)){
      this.upCheckBox('密码输入为空')
      return
    }
    if(!checkPass(passReg,pass)){
      this.upCheckBox('密码格式都输错了')      
      return
    }
    userLogin(email,pass,(data)=>{
      if(data.error){
        this.upCheckBox(data.data)        
        return
      }else{
        if(data.error){
          this.upCheckBox(data.data)  
          return                
        }
        localStorage.setItem('login_time',data.data.user_info.login_time);
        this.props.user_infoAction.update(data.data.user_info)
        this.props.history.replace('/home/my')
      }
    })
  }
  render() {
    return (
      <div className="login">
      <div className='login-form'>
        <p>邮箱</p>
        <input type='text' ref='email'/>
        <p>密码</p>
        <div className='pass-box'>
            <input type='password' className='password' ref='pass'/>
            <div className='eyes'>
            <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-back"></use>
            </svg>
            </div>
        </div>
        </div>
        <div className='login-btn' onClick={this.toLogin}>登录</div>
        <div className='forget-pass'>忘记密码 ?</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    checkText: state.checkText,
    user_info: state.user_info
  }
}
function mapDispatchToProps(dispatch){
  return{
    checkTextAction: bindActionCreators(checkText,dispatch),
    user_infoAction: bindActionCreators(user_info,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);