import React from 'react';
import './style.less'
import {getGroupList} from '@/axios/group'
import {Link} from 'react-router-dom'
class GetTypeGroup extends React.Component {
  constructor(){
    super()
    this.state={
      list: [],
      a: 0
    }
  }
  render() {
    return (
      <div className='group-list'>
      {
        this.state.list.length===0?
        <div style={{textAlign: 'center'}}>更多圈子请期待增加~</div>:
        this.state.list.map((item,index)=>{
          return(
            <div className='group-box' key={index}>
              <Link to={`/group-info/${item.group_id}`}>
              <div className='group-box-top'>
                <img src={require(`@/css/img/${item.group_img}`)} alt=''/>
                <div>
                  <p>{item.name}</p>
                  <p>{item.fans_num}人关注 | {item.topic_num}个帖子</p>
                </div>
                <span className='follow-btn'>关注</span>
              </div>
              <p>{item.description}</p>
              <div className='group-box-btn'>
                {item.show1? <img src={require(`@/css/img/${item.show1}`)} alt=''/>:''}
                {item.show2? <img src={require(`@/css/img/${item.show2}`)} alt=''/>:''}
                {item.show3? <img src={require(`@/css/img/${item.show3}`)} alt=''/>:''}
                {item.show4? <img src={require(`@/css/img/${item.show4}`)} alt=''/>:''}                
              </div>
              </Link>
            </div>
          )
        })
      }
      </div>
    );
  }
  componentWillReceiveProps(nextProps){
    const id= nextProps.match.params.id
    getGroupList(id,(data)=>{
      if(data.error){return}
      this.setState({
        list: data.data
      })
    })
  }
}

export default GetTypeGroup;