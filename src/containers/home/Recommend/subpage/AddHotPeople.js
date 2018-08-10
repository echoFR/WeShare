import React from 'react';
import HotPeople from 'components/hotPeople/HotPeople'
import Loading from 'components/loading/Loading'
class AddHotGroup extends React.Component {
  constructor(){
    super()
    this.state={
        people: []
    }
  }
  render() {
    return (
      <div>
         {
             this.state.people.length===0 ? 
             <Loading /> :
             <HotPeople people={this.state.people}/> 
         }
      </div>
    );
  }
  componentDidMount(){
    //   后台获取圈内达人数据  6个
    let people=[
        {
            name: '达人名字',
            onlineTime: '20',
            isFollow: true,
            fansNum: 200,
            pic:'22.jpg',
        },
        {
            name: 'Echo',
            onlineTime: '在线',
            isFollow: false,
            fansNum: 2001,
            pic: '11.jpg'
        },
        {
            name: 'Echo',
            onlineTime: '在线',
            isFollow: false,
            fansNum: 2001,
            pic: '11.jpg'
        },
        {
            name: 'Echo',
            onlineTime: '在线',
            isFollow: false,
            fansNum: 2001,
            pic: '22.jpg'
        },
        {
            name: 'Echo',
            onlineTime: '在线',
            isFollow: false,
            fansNum: 2001,
            pic: '11.jpg'
        },
        {
            name: 'Echo',
            onlineTime: '在线',
            isFollow: false,
            fansNum: 2001,
            pic: '11.jpg'
        },
        {
            name: 'Echo',
            onlineTime: '在线',
            isFollow: false,
            fansNum: 2001,
            pic: '22.jpg'
        },
        
    ]

    this.setState({
        people: people
    })
  }
}

export default AddHotGroup;