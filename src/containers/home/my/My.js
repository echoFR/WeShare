import React from 'react'
import {Link} from 'react-router-dom'
import MyFun from './subpage/myFun/MyFun'

import './my.less'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import email from '@/acitons/email'

import getInfo from '@/axios/getInfo'

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
                    <div><Link to='/follow'><p>{this.state.info.follow_num}</p><p>关注</p></Link></div>
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
        if(localStorage.getItem('email') == null){
            this.setState({
                isLogin: false
            })
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
            this.setState({
                isLogin: true
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
  )(My);