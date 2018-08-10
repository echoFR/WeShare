import React from 'react';
import './style.less'
import {Link} from 'react-router-dom'
class HomeHeader extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  render() {
    return (
      <div className="homeHeader">
        <div className='city'>
          {this.props.cityName}
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-zhankaijiantou"></use>
          </svg>
        </div>
        <Link to='/search'>
        <div className='search-box'>
          <div>搜素圈子，用户等</div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-weibiaoti101"></use>
            </svg>
        </div>
        </Link>
        <div className='user'>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-UserSettings"></use>
          </svg>
        </div>
      </div>
    );
  }
}

export default HomeHeader;