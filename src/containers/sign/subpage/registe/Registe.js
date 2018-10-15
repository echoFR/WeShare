import React from 'react'
import './style.less'
import {registeCode,checkCode} from '@/axios/registe'
import {userLogin} from '@/axios/login'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import user_info from '@/acitons/user_info'
import checkText from '@/acitons/checkText'
import showCheck from '@/util/showCheck'

import {checkPass,checkEmpty} from '@/util/util'
class Registe extends React.Component {
  constructor(){
    super()
    this.state={
      btnValue: '获取验证码'
    }
    this.getCode= this.getCode.bind(this)
    this.registe= this.registe.bind(this)
    this.upCheckBox=this.upCheckBox.bind(this)  
    this.setTime= this.setTime.bind(this)  
  }
  upCheckBox(text){
    showCheck()
    this.props.checkTextAction.update(text)
  }
  // 验证倒计时
  setTime(countdown,btn){
    if (countdown === 0) {
      btn.removeAttribute('disabled');
      this.setState({
        btnValue: '获取验证码'
      })
      countdown = 60;
    } else {
        btn.setAttribute('disabled', true);
        this.setState({
          btnValue: `${countdown} 秒后重新获取`
        })
        countdown--;
        setTimeout(()=>{
          this.setTime(countdown,btn)
        },1000)
    }
  }
  // 获取验证码
  getCode(){
    const reg= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    let email = this.refs.mailbox.value
    if(checkEmpty(email)){
      this.upCheckBox('邮箱输入不能为空')      
      return
    }
    if(checkPass(reg,email)){ 
      registeCode(email,(data)=>{
        this.upCheckBox(data.data)
        return
      })
      const btn= document.getElementById('getCode')
      this.setTime(60,btn);
      return
    }else{
      this.upCheckBox('邮箱格式不正确')
    }
  }
  // 注册
  registe(){              
    let email = this.refs.mailbox.value    
    let code= this.refs.code.value
    let pass= this.refs.pass.value
    const reg= /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{6,}|(?:(?=.*[A-Z])(?=.*[a-z])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[^A-Za-z0-9])|(?=.*[0-9])(?=.*[^A-Za-z0-9])|).{8,16}$/
    if(checkEmpty(email)){
      this.upCheckBox('邮箱输入不能为空')      
      return
    }
    if(checkEmpty(code)){
      this.upCheckBox('激活码输入不能为空')      
      return
    }
    if(checkEmpty(pass)){
      this.upCheckBox('密码输入不能为空')      
      return
    }
    if(!checkPass(reg,pass)){
      this.upCheckBox('密码必须为8-16位(字母、数字特殊字符的组合)')      
      return
    }
    checkCode({code: code, pass: pass},(data)=>{
      if(data.error){
        this.upCheckBox(data.data)        
      }else{
        // 注册后直接登录 
        userLogin(email,pass,(data)=>{
          if(data.error){
            this.upCheckBox(data.data)        
            return
          }else{
            if(data.error){
              this.upCheckBox(data.data)  
              return                
            }
            console.log(data.data);
            localStorage.setItem('login_time',data.data.user_info.login_time);
            this.props.user_infoAction.update(data.data.user_info)
            this.props.history.replace('/home/my')
          }
        })
        
      }
    })
  }
  componentWillUnmount() {
    // 组件被销毁之前重写setState方法 不对状态做任何改变
    // 防止 定时器 异步 setState
    this.setState = (state,callback)=>{
      return;
    }
  }
  render() {
    return (
      <div className="registe">
        <div className='registe-form'>
            <p>邮箱</p>
            <input type='text' ref='mailbox'/>
            <p>激活码</p>        
            <input type='text' className='code-box' ref='code'/>
            <button className='get-code' onClick={this.getCode} id='getCode'>{this.state.btnValue}</button>
            <p>密码(6-16位)</p>
            <div className='pass-box'>
              <input type='password' className='password' ref='pass'/>
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
)(Registe);