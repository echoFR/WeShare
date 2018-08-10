import React from 'react';
import './messageList.less'
import Item from './Item'
class MessageList extends React.Component {
  render() {
    return (
      <div className="messageList">
        {
            this.props.list.map((item,index)=>{
                return(
                    <Item key={index} item={item} />
                )
            })
        }
      </div>
    );
  }
}

export default MessageList;