import React from 'react';
import './style.less'
import Item from './Item/Item'
import getInfo_id from '@/axios/getInfo_id'

class PeopleList extends React.Component {
  constructor(){
      super()
      this.state={
          list_info: [],
      }
  }
  changeList(index){
    //   const b= this.state.list_info.splice(0,1)
  }
  render() {
    return (
        <div className='people-list'>
            {
            this.state.list_info.length === 0 ? '':
            this.state.list_info.map((item,index)=>{
            return(
                <Item item={item} history={this.props.history} user_id={this.props.user_id} key={index} index={index} changeList={this.changeList}/>
            ) 
            })
            }
        </div>
    )
  }
componentDidMount(){
    var arr=[]
    this.props.list.map((item,index)=>{
        getInfo_id(item,(data)=>{
            if(data.data.info != null){
                arr.push(data.data.info)
                this.setState({
                    list_info: arr
                })
            }
        })
        return item
    })
}
}

export default PeopleList