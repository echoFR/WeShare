import React from 'react';
import './hotpeople.less'
import TitleMore from 'components/titleMore/TitleMore'
class HotPeople extends React.Component {
  render() {
    return (
      <div className='hotPeople'>
        <TitleMore title='圈内达人' />
        <div className='hotPeople-con'>
        {
            this.props.people.map((item,index)=>{
                return (
                    <span key={index}>
                        <img src={require(`../../css/img/${item.pic}`)} alt='' />
                    </span>
                )
            })
        }    
        </div>
      </div>
    );
  }
}

export default HotPeople;