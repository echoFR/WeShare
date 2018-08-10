import React from 'react';
import './hottopic.less'
import TitleMore from 'components/titleMore/TitleMore'
import TopicList from 'components/topicList/TopicList'
class HotTopic extends React.Component {
  render() {
    return (
      <div className="hotTopic">
          <TitleMore title='热门的帖子' />
          <div className='hotTopic-con'>
          {
              this.props.topics.map((item,index)=>{
                return(
                    <TopicList key={index} item={item}/>
                )
              })
          }  
          </div>          
      </div>
    );
  }
  
}

export default HotTopic;