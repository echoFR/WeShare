import React from 'react';
import GoBack from 'components/goBack/GoBack'
import './user.less'
import {NavLink} from 'react-router-dom'
class User extends React.Component {
  constructor(){
    super()
    this.state={
      user_id: null,
      isFollow: true,
      isUser: false,
      info:{}      
    }
  }
  changeFollow(e){
    //阻止冒泡
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
  render() {
    return (
      <div className="user-detail">
        <GoBack title={this.state.info.username} history={this.props.history}/>
        
        <div className='user-baseInfo'>
          {this.state.info.avatar ==null ?'': <img src={require(`@/css/img/${this.state.info.avatar}`)} alt=''/>}
          <div className='baseinfo-con'>
            <div className='baseinfo-con-top'>
              <span>
                <p>{this.state.info.follow_num}</p>
                <p>关注</p>                
              </span>
              <span>
                <p>{this.state.info.fans_num}</p>
                <p>粉丝</p> 
              </span>              
            </div>
            <div className='baseinfo-con-btm'>
              {this.state.isUser?'':
                <div>
                  { this.state.isFollow ? 
                    <span className='btm-isfollow' onClick={(e)=>{this.changeFollow(e)}}>已关注</span> : 
                    <span className='btm-nofollow' onClick={this.changeFollow}>关注</span>
                  }
                  <span className='letter'>私信</span>
                </div>
              }
            </div>
          </div>
        </div>
        <div className='signature'>{this.state.info.signature}</div>
        <div className='move-nav'>
          <NavLink to='/home'><span>主页</span></NavLink>
          <NavLink to='/home'><span>路况</span></NavLink>          
        </div>
      </div>
    );
  }
  componentDidMount(){
    this.setState({
      info: this.props.location.state.info,
      isUser: this.props.location.state.isUser
    })
  }
}

export default User;