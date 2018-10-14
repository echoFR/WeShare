import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import checkText from '@/acitons/checkText'
import user_info from '@/acitons/user_info'
import showCheck from '../../../util/showCheck'
import {getRelation,deleteFollow_gruop,insertFollow_group} from '../../../axios/group'
class Item extends React.Component {
    constructor(){
        super()
        this.state={
            isFollow: false,
            user_id: null,
            item: {
            }
        }
        this.changeFollow=this.changeFollow.bind(this)
        this.goDetail= this.goDetail.bind(this)
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
        const group_id= this.props.item.group_id
        const user_id= this.state.user_id
        if(flag === true){// 取消关注
            deleteFollow_gruop(user_id,group_id,(data)=>{
                if(data.error){
                    console.log(data.data);
                    this.upCheckBox(data.data)
                }else{
                    let num= this.state.item.fans_num
                    let data = Object.assign({}, this.state.item, { fans_num: num-1 })
                    this.setState({
                        isFollow: false,
                        item: data
                    })
                }
            })
        }else{  //关注
            insertFollow_group(user_id,group_id,(data)=>{
                if(data.error){
                    console.log(data.data);
                    this.upCheckBox(data.data)                    
                }else{
                    let num= this.state.item.fans_num
                    let data = Object.assign({}, this.state.item, { fans_num: num+1 })
                    this.setState({
                        isFollow: true,
                        item: data
                    })
                }
            })
        }
    }
    goDetail(item){
        this.props.history.push(`/group-info/${item.group_id}`)
    }
componentDidMount(){
    if(this.props.user_info != null){
        if(this.props.user_info.user_id!==0){
            this.setState({
                item: this.props.item,
                user_id: this.props.user_info.user_id
            })
            const group_id= this.props.item.group_id
            const user_id= this.props.user_info.user_id
            getRelation(user_id,group_id,(data)=>{
                if(!data.err){
                    if(!data.data.length){
                        this.setState({
                            isFollow: false
                        })
                    }else{
                        this.setState({
                            isFollow: true
                        })
                    }
                }else{
                    console.log('用户圈子关系出错');
                }
            })
        }
      }
}
render() {
    return (
    <div className='group-box' onClick={(e)=>{this.goDetail(this.props.item)}}>
        {this.state.item.length=== 0?'':
        <div to={`/group-info/${this.state.item.group_id}`}>
            <div className='group-box-top'>
                <img src={require(`../../../css/img/${this.props.item.group_img}`)} alt=''/>
                <div>
                <p>{this.state.item.name}</p>
                <p>{this.state.item.fans_num}人关注 | {this.state.item.topic_num}个帖子</p>
                </div>
                { this.state.isFollow ? 
                <span className='isfollow-btn' onClick={(e)=>{this.changeFollow(e,this.state.item,true)}}>已关注</span> : 
                <span className='nofollow-btn' onClick={(e)=>{this.changeFollow(e,this.state.item,false)}}>关注</span>
                }
            </div>
            <p>{this.state.item.description}</p>
            <div className='group-box-btn'>
                {this.state.item.show1? <img src={require(`@/css/img/${this.state.item.show1}`)} alt=''/>:''}
                {this.state.item.show2? <img src={require(`@/css/img/${this.state.item.show2}`)} alt=''/>:''}
                {this.state.item.show3? <img src={require(`@/css/img/${this.state.item.show3}`)} alt=''/>:''}
                {this.state.item.show4? <img src={require(`@/css/img/${this.state.item.show4}`)} alt=''/>:''}                
            </div>
        </div>
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
        user_infoAciton: bindActionCreators(user_info,dispatch),        
        checkTextAction: bindActionCreators(checkText,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);