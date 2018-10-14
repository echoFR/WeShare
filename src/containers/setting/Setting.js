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
  }
  noConfirm(){
    this.setState({
      showConfirm: false
    })
  }
  logOut(){
    this.setState({
      showConfirm: false
    })
    log_out((data)=>{
      if(data.error){
        console.log(data.error);
        showCheck();
        this.props.checkTextAction.update(data.data)
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
  render() {
    return (
      <div className="setting">
        {this.state.showConfirm? <Confirm noConfirm={this.noConfirm}  confirm={this.logOut} text='确定退出当前账号吗？'/>: ''}
        <GoBack title='账号设置' history={this.props.history}/>
        <div className='setFun'>
          <div className='info'>
            <span>
            {this.state.info.avatar ==null ?'': <span> 头像： <img src={require(`@/css/img/${this.state.info.avatar}`)}  alt=''/> </span>}              
            </span>
          </div>
          <div>
            <span>昵称：{this.state.info.username}</span>
          </div>
          <div>
            <span>签名：{this.state.info.signature}</span>
          </div>
          <div>
            <span>邮箱绑定：{this.state.info.email}</span>
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