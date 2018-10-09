import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import checkText from '@/acitons/checkText'
import email from '@/acitons/email'
import getInfo from '@/axios/getInfo'
import {getRelation,deleteFollow_gruop,insertFollow_group} from '../../../axios/group'
class Item extends React.Component {
    constructor(){
        super()
        this.state={
            isFollow: true,
            user_id: null,
        }
        this.getUserId= this.getUserId.bind(this)
        this.getUserEmail= this.getUserEmail.bind(this)
        this.changeFollow=this.changeFollow.bind(this)
        this.goDetail= this.goDetail.bind(this)
    }
    // 改变关注状态
    changeFollow(e,item,flag){
        //阻止冒泡
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        const group_id= this.props.item.group_id
        const user_id= this.state.user_id
        if(flag === true){// 取消关注
            deleteFollow_gruop(user_id,group_id,(data)=>{
                if(data.error){
                    console.log(data.data);
                    this.props.checkTextAction.update(data.data)
                }else{
                    this.setState({
                        isFollow: false
                    })
                }
            })
        }else{  //关注
            insertFollow_group(user_id,group_id,(data)=>{
                if(data.error){
                    console.log(data.data);
                    this.props.checkTextAction.update(data.data)
                }else{
                    this.setState({
                        isFollow: true
                    })
                }
            })
        }
    }
    goDetail(item){
        this.props.history.push(`/group-info/${item.group_id}`)
    }
    getUserId(id){
        this.setState({
          user_id: id
        })
        // 用户圈子关系
        const group_id= this.props.item.group_id
        const user_id= this.state.user_id
        getRelation(user_id,group_id,(data)=>{
            if(data.data.length === 0){
                this.setState({
                    isFollow: false
                })
            }else{
                this.setState({
                    isFollow: true
                })
            }
        })
    }
    getUserEmail(){
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
componentDidMount(){
    this.getUserEmail()
}
render() {
    return (
    <div className='group-box' onClick={(e)=>{this.goDetail(this.props.item)}}>
        <div to={`/group-info/${this.props.item.group_id}`}>
        <div className='group-box-top'>
            <img src={require(`@/css/img/${this.props.item.group_img}`)} alt=''/>
            <div>
            <p>{this.props.item.name}</p>
            <p>{this.props.item.fans_num}人关注 | {this.props.item.topic_num}个帖子</p>
            </div>
            { this.state.isFollow ? 
            <span className='isfollow-btn' onClick={(e)=>{this.changeFollow(e,this.props.item,true)}}>已关注</span> : 
            <span className='nofollow-btn' onClick={(e)=>{this.changeFollow(e,this.props.item,false)}}>关注</span>
            }
        </div>
        <p>{this.props.item.description}</p>
        <div className='group-box-btn'>
            {this.props.item.show1? <img src={require(`@/css/img/${this.props.item.show1}`)} alt=''/>:''}
            {this.props.item.show2? <img src={require(`@/css/img/${this.props.item.show2}`)} alt=''/>:''}
            {this.props.item.show3? <img src={require(`@/css/img/${this.props.item.show3}`)} alt=''/>:''}
            {this.props.item.show4? <img src={require(`@/css/img/${this.props.item.show4}`)} alt=''/>:''}                
        </div>
        </div>
    </div>
    )
}
}
function mapStateToProps(state){
    return{
        email: state.email,        
        checkText: state.checkText
    }
}
function mapDispatchToProps(dispatch){
    return{
        emailAction: bindActionCreators(email,dispatch),        
        checkTextAction: bindActionCreators(checkText,dispatch)
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);