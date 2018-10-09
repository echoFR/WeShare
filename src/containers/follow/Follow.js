import React from 'react';
import GoBack from 'components/goBack/GoBack'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import email from '@/acitons/email'
import './follow.less'
import getInfo from '@/axios/getInfo'
import PeopleList from 'components/peopleList/PeopleList'
import NoList from 'components/noList/NoList'
import {getFollows} from '@/axios/user_Relation'
class Follow extends React.Component {
  constructor(){
    super()
    this.state={
      user_id: null,
      follows: [],
    }
    this.getUserId= this.getUserId.bind(this)
  }
  render() {
    return (
      <div className="follow">
        <GoBack title='关注列表' history={this.props.history}/>
        { 
          this.state.follows.length === 0 ? <NoList text='还没有任何粉丝哦~'/> : 
          <PeopleList list={this.state.follows} history={this.props.history} user_id={this.state.user_id}></PeopleList>
        }
        
      </div>
    );
  }
  getUserId(id){
    this.setState({
      user_id: id
    })
    // 获取关注列表
    getFollows(this.state.user_id,(data)=>{
      if(!data.error){
        let follows=data.data.map((item,index)=>{
          return item.follow_id
        })
        this.setState({
          follows: follows
        })
      }
    })
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
              this.getUserId(data.data.info.user_id)
            }
          })
      }
    }else{
      getInfo(this.props.email,(data)=>{
        if(!data.error){
          this.getUserId(data.data.info.user_id)
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
)(Follow);