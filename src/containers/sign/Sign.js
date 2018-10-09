import React from 'react';
import './sign.less'
import Registe from './subpage/registe/Registe'
import Login from './subpage/login/Login'
class Sign extends React.Component {
  constructor(){
    super()
    this.state={
      selectRegiste: true
    }
    this.goBack= this.goBack.bind(this)
    this.changeSelect= this.changeSelect.bind(this)    
  }
  goBack(){
    this.props.history.go(-1)
  }
  changeSelect(flag){
    if(flag){
      this.refs.selectBg.style.animation= 'registeBtn 0.8s forwards'
    }else{
      this.refs.selectBg.style.animation= 'loginBtn 0.8s forwards'      
    }
    this.setState({
      selectRegiste: flag
    })
  }
  render() {
    return (
      <div className="sign">
        <div className='sign-bg'></div>
        <div className='sign-con'>
          <div className='sign-goBack' onClick={this.goBack}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-back"></use>
            </svg>
          </div>
          <div className='appName'>
            <p>WeShare</p>
          </div>
          <div className='select-btn'>
           <span className='select-bg' ref='selectBg'></span>          
           <span onClick={()=>{this.changeSelect(true)}}  ref='registe'>注册</span>
           <span onClick={()=>{this.changeSelect(false)}} ref='login'>登录</span>
          </div>
          <div className='select-con'>
            {this.state.selectRegiste? <Registe history={this.props.history}/> : <Login history={this.props.history} /> }
          </div>
        </div>
      </div> 
    );
  }
}

export default Sign;