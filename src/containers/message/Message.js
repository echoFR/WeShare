import React from 'react';
import './message.less'
import GoBack from '../../components/goBack/GoBack'
import MessageFun from './subpage/MessageFun'
import AddMessageList from './subpage/AddMessageList'
class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <GoBack title='我的消息' history={this.props.history}/>
        <MessageFun />
        <AddMessageList />
      </div>
    );
  }
}

export default Message;