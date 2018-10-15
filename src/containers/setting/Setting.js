import React from 'react';
import './setting.less'
import GoBack from 'components/goBack/GoBack'
import Confirm from 'components/confirm/Confirm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import user_info from '@/acitons/user_info'
import log_out from '@/axios/log_out'
import checkText from '@/acitons/checkText'
import showCheck from '@/util/showCheck'
import {Link} from 'react-router-dom'
import {modifyInfo} from '@/axios/user_info'
class Setting extends React.Component {
  constructor(){
    super()
    this.state={
      showConfirm: false,
      info: {}
    }
    this.selectConfirm=this.selectConfirm.bind(this)
    this.noConfirm=this.noConfirm.bind(this)
    this.logOut=this.logOut.bind(this)
    this.handleChange= this.handleChange.bind(this)
    this.modify_info= this.modify_info.bind(this)
    this.upCheckBox= this.upCheckBox.bind(this)
  }
  upCheckBox(text){
    showCheck();
    this.props.checkTextAction.update(text)
  }
  noConfirm(){
    this.setState({
      showConfirm: false
    })
  }
  // 退出登录
  logOut(){
    this.setState({
      showConfirm: false
    })
    log_out((data)=>{
      if(data.error){
        this.upCheckBox('退出登录失败')
      }else{
        this.props.user_infoAciton.log_out();
        this.props.history.replace('/home/my');
      }
    })
  }
  selectConfirm(){
    this.setState({
      showConfirm: true
    })
  }
  handleChange(e,type){
    if(type === 'username'){
      const new_info= Object.assign({},this.state.info,{username: e.target.value})
      this.setState({
        info: new_info
      })
    }else if(type === 'signature'){
      const new_info= Object.assign({},this.state.info,{signature: e.target.value})
      this.setState({
        info: new_info
      })
    }
  }
  // 修改用户信息
  modify_info(type){
    // 正则验证
    var newValue=''
    if(type === 'username'){
      newValue= this.state.info.username
      if(newValue.length > 20){
        this.upCheckBox('昵称长度不能超过20')
        return
      }
    }
    else if(type === 'signature'){
      newValue= this.state.info.signature
      if(newValue.length > 30){
        this.upCheckBox('签名长度不能超过20')
        return
      }
    }
    modifyInfo(this.props.user_info.user_id,type,newValue,(data)=>{
      this.upCheckBox(data.data)
      this.props.user_infoAciton.update(this.state.info)
    })
  }
  render() {
    return (
      <div className="setting">
        {this.state.showConfirm? <Confirm noConfirm={this.noConfirm}  confirm={this.logOut} text='确定退出当前账号吗？'/>: ''}
        <GoBack title='账号设置' history={this.props.history}/>
        <div className='setFun'>
          <div className='info'>
            {this.state.info.avatar ==null ?'': <span> 头像： <img src={require(`@/css/img/${this.state.info.avatar}`)}  alt=''/> </span>}              
          </div>
          <div>
            <span className='base-info'>
            <span className='input-title'>昵称：</span><input type='text' defaultValue={this.state.info.username} onChange={(e)=>{this.handleChange(e,'username')}}/>
            </span>
            <span onClick={()=>{this.modify_info('username')}}>
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-mjiantou"></use>
              </svg>
            </span>
          </div>
          <div>
            <span className='base-info'>
            <span className='input-title'>签名：</span><input type='text' defaultValue={this.state.info.signature} onChange={(e)=>{this.handleChange(e,'signature')}}/>
            </span>
            <span onClick={()=>{this.modify_info('signature')}}>
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-mjiantou"></use>
              </svg>
            </span>
          </div>
          <Link className='out' to='/modify_email'>
            邮箱绑定
          </Link>
          <Link className='out' to='/modify_pass'>
            修改密码
          </Link>
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
    if(this.props.user_info != null){
      if(this.props.user_info.user_id!==0){
          this.setState({
              info: this.props.user_info
          })
      }
    }
  }
}

function mapStateToProps(state){
  return{
    user_info: state.user_info,
    checkText: state.checkText,
  }
}
function mapDispatchToProps(dispatch){
  return{
    user_infoAciton: bindActionCreators(user_info,dispatch),
    checkTextAction: bindActionCreators(checkText,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);