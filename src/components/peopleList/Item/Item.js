import React from 'react';
import {getRelation,insertFollow,deleteFollow} from '@/axios/user_Relation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import checkText from '@/acitons/checkText'
class Item extends React.Component {
    constructor(){
        super()
        this.state={
            item: {},
            isFollow: null,
        }
    }
    // 改变关注状态
   changeFollow(e,item,flag){
    //阻止冒泡
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    // item id
    const item_id= item.user_id;
    // user_id
    var user_id= this.props.user_id;
    //页面显示
    if(flag === true){// 取消关注
        deleteFollow(user_id,item_id,(data)=>{
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
        insertFollow(user_id,item_id,(data)=>{
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
    this.props.history.push({
        pathname: '/user',
        state: {info: item, isUser: false}
    })
}
componentDidMount(){
    const item_id= this.props.item.user_id
    const user_id= this.props.user_id
    const pathname= this.props.history.location.pathname
    if(pathname === '/fans'){
        getRelation(user_id,item_id,(data)=>{
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
    }else if(pathname === '/follow'){
        this.setState({
            isFollow: true
        })
    }
}
render() {
    return (
    <div className='item' onClick={(e)=>{this.goDetail(this.props.item)}}>
        <div className='item-con'>
        <img src={require(`@/css/img/${this.props.item.avatar}`)} alt=''/>
        <div className='item-info'>
        <p>{this.props.item.username}</p>
        <p>粉丝数：{this.props.item.fans_num}</p>
        </div>
        </div>
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
        checkText: state.checkText
    }
}
function mapDispatchToProps(dispatch){
    return{
        checkTextAction: bindActionCreators(checkText,dispatch)
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);