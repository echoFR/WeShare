import React from 'react';
import HotGroup from 'components/hotGroup/HotGroup'
import Loading from 'components/loading/Loading'
class AddHotGroup extends React.Component {
  constructor(){
    super()
    this.state={
      groups: [],
    }
  }
  render() {
    return (
      <div>
        {
          this.state.groups.length===0 ? 
          <Loading /> :
         <HotGroup groups={this.state.groups}/>
        }
      </div>
    );
  }
  componentDidMount(){
    // 后台请求热门圈子数据
    let groups=[
      {
        title: '圈子1',
        peopleNum: '1222',
        description: '圈子1的描述'
      },
      {
        title: '圈子名字',
        peopleNum: '122',
        description: '圈子描述圈子描述'
      }
    ]
    this.setState({
      groups: groups
    })
  }
}

export default AddHotGroup;