import React from 'react';
import './setting.less'
import GoBack from 'components/goBack/GoBack'
import Confirm from 'components/confirm/Confirm'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import email from '@/acitons/email'

import getInfo from '../../axios/getInfo'
class Setting extends React.Component {
  constructor(){
    super()
    this.state={
      showConfirm: false,
      info: {}
    }
    this.selectConfirm=this.selectConfirm.bind(this)
    this.noConfirm=this.noConfirm.bind(this)
    this.confirm=this.confirm.bind(this)
  }
  noConfirm(){
    this.setState({
      showConfirm: false
    })
  }
  confirm(){
    this.setState({
      showConfirm: false
    })
    // 清除当前用户
    localStorage.removeItem('email')
    this.props.emailAction.update(null)
    this.props.history.replace('/home/my');
  }
  selectConfirm(){
    this.setState({
      showConfirm: true
    })
  }
  render() {
    return (
      <div className="setting">
        {this.state.showConfirm? <Confirm noConfirm={this.noConfirm}  confirm={this.confirm} text='确定退出当前账号吗？'/>: ''}
        <GoBack title='账号设置' history={this.props.history}/>
        <div className='setFun'>
          <div className='info'>
            <span>
            {this.state.info.avatar ==null ?'': <span> 头像： <img src={require(`@/css/img/${this.state.info.avatar}`)}  alt=''/> </span>}              
            </span>
            <span>
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-mjiantou"></use>
              </svg>
            </span>
          </div>
          <div>
            <span>昵称：{this.state.info.username}</span>
            <span>
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-mjiantou"></use>
              </svg>
            </span>
          </div>
          <div>
            <span>签名：{this.state.info.signature}</span>
            <span>
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-mjiantou"></use>
              </svg>
            </span>
          </div>
          <div>
            <span>邮箱绑定：{this.state.info.email}</span>
            <span>
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-mjiantou"></use>
              </svg>
            </span>
          </div>

          <div className='out' onClick={this.selectConfirm}>
            退出登录
          </div>
          <div>
            <span>关于WeShare</span>
            <span>
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-mjiantou"></use>
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount(){
    if(this.props.email == null){
      if(localStorage.getItem('email') == null){
          console.log('还没有登录')
      }else{
          const email= localStorage.getItem('email')
          this.props.emailAction.update(email)
          getInfo(email,(data)=>{
            if(!data.error){
              this.setState({
                info: data.data.info
              })
            }
          })
      }
    }else{
      getInfo(this.props.email,(data)=>{
        if(!data.error){
          this.setState({
            info: data.data.info
          })
        }
      })
    }


  }
}

function mapStateToProps(state){
  return{
    email: state.email
  }
}
function mapDispatchToProps(dispatch){
  return{
    emailAction: bindActionCreators(email,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);