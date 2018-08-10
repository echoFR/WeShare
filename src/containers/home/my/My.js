import React from 'react'
import {Link} from 'react-router-dom'
import MyFun from './subpage/myFun/MyFun'
import './my.less'
class My extends React.Component {
    constructor(){
        super()
        this.state={}
    }
  render() {
    return (
      <div className="my">
        <div className='pageTitle'>我的</div>
        <Link to='/user'>
        <div className='myInfo'>
            <img src={require('@/css/img/22.jpg')} className='myPic' alt=''/>
            <div className='mytext'>
                <p>Echo_</p>
                <p>说点什么吧</p>
            </div>
            <div className='toUser'>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-mjiantou"></use>
                </svg>
            </div>
        </div>
        </Link>
        {/* 我的关注 */}
        <div className='my-contant'>
            <div><Link to='/follow'><p>500</p><p>关注</p></Link></div>
            <div><Link to='/fans'><p>90</p><p>粉丝</p></Link></div>
            <div><Link to='/moving'><p>30</p><p>动态</p></Link></div>            
        </div>
        <MyFun />
      </div>
    );
  }
  
}
export default My;