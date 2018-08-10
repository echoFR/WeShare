import React from 'react';
import './topiclist.less'
class TopicList extends React.Component {
  render() {
    return (
      <div className='hotTopic-con-box'>
        <div className='hotTopic-left'>
            <div className='topic-auto'>
              <img src={require(`@/css/img/${this.props.item.authorPic}`)} alt='' />
              <span className='topic-autoname'>{this.props.item.author}</span>
              <span className='topic-time'>{this.props.item.uploadTime}</span>
            </div>
            <p className='topic-title'>{this.props.item.title}</p>
            <p>
              <span className='topic-comments'>评论：{this.props.item.commentNum}</span>
              <span>#{this.props.item.type}</span>                    
            </p>
          </div>
          <div className='hotTopic-right'>
          {/* 帖子图片 */}
            <img src={require(`@/css/img/${this.props.item.pic}`)} alt=''/>
          </div>
      </div>
    );
  }
}

export default TopicList;