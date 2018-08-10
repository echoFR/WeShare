import React from 'react';
import './hotGroup.less'
import TitleMore from 'components/titleMore/TitleMore'
import Item from './Item'
class HotGroup extends React.Component {
  render() {
    return (
        <div className='hotGroup'>
            <TitleMore title='热门的圈子' />
            <div className='hotGroup-con'>
            {
                this.props.groups.map((item,index)=>{
                    return <Item key={index} item={item}/>
                })
            }
            </div>
        </div>
    )
  }
}

export default HotGroup