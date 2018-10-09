import React from 'react';
import './nolist.less'
class NoList extends React.Component {
  render() {
    return (
        <div className='no-list'>
           {this.props.text}
        </div>
    )
  }
}
NoList.defaultProps={
    text: '还没有任何数据'
}
export default NoList