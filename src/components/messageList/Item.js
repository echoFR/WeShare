import React from 'react';
class Item extends React.Component {
  render() {
    return (
      <div className="message-item">
        <div className="message-item-left">
            <img src={require(`../../css/img/${this.props.item.senderPic}`)} alt=''/>
        </div>
        <div className="message-item-right">
            <div className='message-top'>
                <span className='message-sender'>{this.props.item.sender}</span>
                <span>{this.props.item.sendTime}</span>
            </div>
            <div className='message-bottom'>{this.props.item.message}</div>
        </div>
      </div>
    );
  }
}

export default Item;