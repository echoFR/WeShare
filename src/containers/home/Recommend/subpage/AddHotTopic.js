import React from 'react';
import Loading from 'components/loading/Loading'
import HotTopic from 'components/hotTopic/HotTopic'
class AddHotTopic extends React.Component {
  constructor(){
    super()
    this.state={
        topics: []
    }
  }
  render() {
    return (
      <div>
        {
            this.state.topics.length===0 ?
            <Loading /> :
            <HotTopic topics={this.state.topics}/>
        }
      </div>
    );
  }
  componentDidMount(){
    //   后台获取topic数据
      let topics=[
          {
              authorPic: '22.jpg',
              authorName: 'Echo_',
              uploadTime: '10分钟前',
              title: '关于Echo的那些事',
              pic: '11.jpg',
              commentNum: 222,
              type: '无辣不欢'
          },
          {
            authorPic: '22.jpg',
            authorName: 'Echo_',
            uploadTime: '10分钟前',
            title: '关于Echo的那些事',
            pic: '11.jpg',
            commentNum: 222,
            type: '无辣不欢'
        }
      ]

      this.setState({
          topics: topics
      })
  }
}

export default AddHotTopic;