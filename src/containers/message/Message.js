import React from 'react';
import './message.less'
import checkText from '@/acitons/checkText'
import user_info from '@/acitons/user_info'
import showCheck from '../../util/showCheck'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import GoBack from '../../components/goBack/GoBack'
import MessageFun from './subpage/MessageFun'
import AddMessageList from './subpage/AddMessageList'
class Message extends React.Component {
  constructor(){
    super()
    this.upCheckBox=this.upCheckBox.bind(this)
    
  }
  upCheckBox(text){
    showCheck()
    this.props.checkTextAction.update(text)
  }
  render() {
    return (
      <div className="message">
        <GoBack title='我的消息' history={this.props.history}/>
        <MessageFun />
        <AddMessageList />
      </div>
    );
  }
  componentDidMount(){
    if(!this.props.user_info.user_id){
        this.upCheckBox('还没有登录，请先登录');
        this.props.history.replace('/sign');
    }
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
)(Message);