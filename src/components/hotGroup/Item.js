import React from 'react';
import './item.less'
class Item extends React.Component {
  render() {
    return (
        <div className='hotGroup-conbox'>
            <div className='hotGroup-left'>
                <p className='title'>{this.props.item.title}</p>
                <p className='grouptext'>{this.props.item.peopleNum}人参与 | {this.props.item.description}</p>
            </div>
            <div className='hotGroup-right'>
                <img src={require('@/css/img/11.jpg')} alt=''/>
            </div>              
        </div>
    );
  }
}

export default Item;