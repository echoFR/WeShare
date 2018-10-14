import React from 'react'
import {Link} from 'react-router-dom'
import MyFun from './subpage/myFun/MyFun'

import './my.less'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import user_info from '@/acitons/user_info'
class My extends React.Component {
    constructor(){
        super()
        this.state={
            isLogin: false,
            info:{}
        }
    }
    render() {
        return (
        <div className="my">
            <div className='pageTitle'>我的</div>
            {this.state.isLogin?
            (
            <div className='user-info'>
                <Link to={{pathname: '/user', state: {info : this.state.info, isUser: true}}} >
                    <div className='myInfo'>
                        {this.state.info.avatar ==null ?'': <img src={require(`@/css/img/${this.state.info.avatar}`)} className='myPic' alt=''/>}
                        <div className='mytext'>
                            <p>{this.state.info.username}</p>
                            <p>{this.state.info.signature}</p>
                        </div>
                        <div className='toUser'>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-mjiantou"></use>
                            </svg>
                        </div>
                    </div>
                </Link>
                {/* 我的关注 */}
                <div className='my-contant'>
                    <div><Link to='/follow'><p>{this.props.user_info.follow_num}</p><p>关注</p></Link></div>
                    <div><Link to='/fans'><p>{this.state.info.fans_num}</p><p>粉丝</p></Link></div>
                    <div><Link to='/moving'><p>{this.state.info.moving_num}</p><p>动态</p></Link></div>            
                </div>
            </div>
            ):
            (
            <Link to='/sign'>
            <div className='no-user' onClick={this.toSign}>
                <div className='no-user-icon'>
                    <img src={require('@/css/img/1.png')} alt=''/>点击登录 / 注册
                </div>
            </div>
            </Link> 
            )
            }
            <MyFun />
        </div>
        );
    }
    componentWillMount(){
        if(this.props.user_info != null){
            if(this.props.user_info.user_id!==0){
                this.setState({
                    isLogin: true,
                    info: this.props.user_info
                })
            }else{
                this.setState({
                    isLogin: false
                })
            }
        }
    }
}
function mapStateToProps(state){
    return{
      user_info: state.user_info
    }
  }
  function mapDispatchToProps(dispatch){
    return{
      user_infoAction: bindActionCreators(user_info,dispatch)
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(My);