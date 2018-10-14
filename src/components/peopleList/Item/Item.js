import React from 'react';
import {getRelation,insertFollow,deleteFollow} from '@/axios/user_Relation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import checkText from '@/acitons/checkText'
import showCheck from '@/util/showCheck'
import user_info from '@/acitons/user_info'

class Item extends React.Component {
    constructor(){
        super()
        this.state={
            item: {},
            isFollow: null,
            user_id: null
        }
        this.upCheckBox= this.upCheckBox.bind(this)
    }
    upCheckBox(text){
        showCheck()
        this.props.checkTextAction.update(text)        
    }
    // 改变关注状态
   changeFollow(e,item,flag){
    //阻止冒泡
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if(flag === true){// 取消关注
        deleteFollow(this.state.user_id,this.state.item.user_id,(data)=>{
            if(data.error){
                console.log(data.data);
                this.upCheckBox(data.data);
            }else{
                // item的粉丝-1
                let num= this.state.item.fans_num                
                let data = Object.assign({}, this.state.item, { fans_num: num-1 })
                this.setState({
                    isFollow: false,
                    item: data
                })
                // user_info follow -1
                this.props.user_infoAction.reduce_follow()
            }
        })
    }else{  //关注
        insertFollow(this.state.user_id,this.state.item.user_id,(data)=>{
            if(data.error){
                this.upCheckBox('错误')
            }else{
                // item的粉丝数+1
                let num= this.state.item.fans_num
                let data = Object.assign({}, this.state.item, { fans_num: num+1 })
                this.setState({
                    isFollow: true,
                    item: data
                })
                // user_info的follow +1
                this.props.user_infoAction.add_follow()
            }
        })
    }
}
goDetail(item){
    this.props.history.push({
        pathname: `/user`,
        state: {user_id: item.user_id, isUser: false}
    })
}
componentDidMount(){
    this.setState({
        item: this.props.item,
        user_id: this.props.user_info.user_id
    })
    const item_id= this.props.item.user_id
    const user_id= this.props.user_info.user_id
    const pathname= this.props.history.location.pathname
    if(pathname === '/fans'){
        getRelation(user_id,item_id,(data)=>{
            if(data.data.length){
                this.setState({
                    isFollow: true
                })
            }else{
                this.setState({
                    isFollow: false
                })
            }
        })
    }else if(pathname === '/follow'){
        this.setState({
            isFollow: true
        })
    }
}
render() {
    return (
    <div className='item' onClick={(e)=>{this.goDetail(this.props.item)}}>
        {this.state.item.length===0?'':
            <div className='item-con'>
            <img src={require(`@/css/img/${this.props.item.avatar}`)} alt=''/>
            <div className='item-info'>
            <p>{this.props.item.username}</p>
            <p>粉丝数：{this.state.item.fans_num}</p>
            </div>
            </div>
        }
        { this.state.isFollow ? 
            <span className='isfollow' onClick={(e)=>{this.changeFollow(e,this.props.item,true)}}>已关注</span> : 
            <span className='nofollow' onClick={(e)=>{this.changeFollow(e,this.props.item,false)}}>关注</span>
        }
    </div>
    )
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
)(Item);