import React from 'react';
import './style.less'
import {getGroupList} from '@/axios/group'
import Item from './Item'
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
            <Item key={index} item={item} history={this.props.history}/>
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